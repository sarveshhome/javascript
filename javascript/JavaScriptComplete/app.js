//Budget Controller
var budgetController = (function(){
    
    var Expense  = function(id,description,value){
            this.id = id;
            this.description = description;
            this.value = value;
    };

    var Income  = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal= function(type){
        var sum =0;
        data.allItems[type].forEach(function(cur){
            sum +=  cur.value;
        });
        data.totals[type] = sum;
    };

    var data ={
        allItems:{
            exp :[],
            inc: []
        },
        totals :{
            exp:0,
            inc: 0
        },
        budget:0,
        percentage:-1
    };

    return {
        addItem : function(type,des,val){                
                var newItem,ID;

                //create new ID
                if (data.allItems[type].length >0) {
                    ID =data.allItems[type][data.allItems[type].length-1].id + 1;    
                }
                else    
                {
                    ID =0;                    
                }
                
                //create new item based on 'inc' or 'exp' type                
                if (type ==='exp') {
                    newItem =new Expense(ID,des,val);
                }
                else if( type === 'inc') {
                    newItem =new Income(ID,des,val);
                }                
                //Push it into our data structure 
                data.allItems[type].push(newItem);

                //Return the new element
                return newItem;

        },    
        calculateBudget: function(){
            //calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            //Calculate the budget : income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            //calculate the percentage of income that we spent
            if (data.totals.inc>0) {
                data.percentage =Math.round((data.totals.inc / data.totals.exp) * 100);    
            } else {
                data.percentage =-1;
            }            
        },  
        getBudget : function(){
            return {
                budget :data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },  
        testing : function(){
            console.log(data);
        }
    }
})();

//UI Controller
var UIController = (function(){

        var DOMstring = {
            inputType :'.add__type',
            inputDescription : '.add__description',
            inputValue : '.add__value',
            inputBtn : '.add__btn',
            incomeContainer: '.income__list',
            expensesContainer: '.expenses__list',
            budgetLabal:'.budget__value',
            incomeLabal:'.budget__income--value',
            expensesLabal:'.budget__expenses--value',
            percentageLabal :'.budget__expenses--percentage'
        };
        var formatNumber = function(num, type) {
            var numSplit, int, dec, type;
            /*
                + or - before number
                exactly 2 decimal points
                comma separating the thousands
    
                2310.4567 -> + 2,310.46
                2000 -> + 2,000.00
                */
    
            num = Math.abs(num);
            num = num.toFixed(2);
    
            numSplit = num.split('.');
    
            int = numSplit[0];
            if (int.length > 3) {
                int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 23510, output 23,510
            }
    
            dec = numSplit[1];
    
            return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
    
        };
        return {
            getInputs : function(){
                return {
                        type :document.querySelector(DOMstring.inputType).value, //inc and exp
                        description : document.querySelector(DOMstring.inputDescription).value, //description
                        value : parseFloat(document.querySelector(DOMstring.inputValue).value) //value
                };
                // var type =document.querySelector('.add__type').value; //inc and exp
                // var description = document.querySelector('.add__description').value ; //description
                // var value  = document.querySelector('.add__value').value; //value

            },
            addListItem: function(obj, type) {
                var html, newHtml, element;
                // Create HTML string with placeholder text
                
                if (type === 'inc') {
                    element = DOMstring.incomeContainer;
                    
                    html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                } else if (type === 'exp') {
                    element = DOMstring.expensesContainer;
                    
                    html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                }
                
                // Replace the placeholder text with some actual data
                newHtml = html.replace('%id%', obj.id);
                newHtml = newHtml.replace('%description%', obj.description);
                newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
                
                // Insert the HTML into the DOM
                document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            },
            clearFields: function(){
                var fields,fieldsArr;

                fields =  document.querySelectorAll(DOMstring.inputDescription +"," + DOMstring.inputValue);
                fieldsArr = Array.prototype.slice.call(fields);

                fieldsArr.forEach((current,index,array)=> {
                    current.value ="";
                });

                fieldsArr[0].focus();

            },            
            displayBudget: function(obj){
                document.querySelector(DOMstring.budgetLabal).textContent = obj.budget;
                document.querySelector(DOMstring.incomeLabal).textContent = obj.totalInc;
                document.querySelector(DOMstring.expensesLabal).textContent = obj.totalExp;
                
                
                if (obj.percentage>0) {
                    document.querySelector(DOMstring.percentageLabal).textContent = obj.percentage + '%';       
                }
                else
                {
                    document.querySelector(DOMstring.percentageLabal).textContent = '---';   
                }
            },
            getDOMString : function(){
                return DOMstring;
            }
        };        
})();



//Global APP Controller
var controller = (function(budgetCtrl,UICtrl){


    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMString();
        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);    

        document.addEventListener('keypress',function(event){
            //console.log(event);
            if (event.keyCode ===13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

   var updateBudget =   function(){
            //1. Calculate the budget 
            budgetCtrl.calculateBudget();
            //2. Return the budget
            var budget = budgetCtrl.getBudget();
            //3. Display the budget on the UI
            console.log(budget);      
            UICtrl.displayBudget(budget);
    };


    var ctrlAddItem = function(){
        var input, newItem;
        //1. Get the field input data
        input = UICtrl.getInputs();
        //console.log(input);
        if (input.description != null && !isNaN(input.value) && input.value >0 ) {
            //2.  Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            //3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);
            //4. Clear field
            UICtrl.clearFields();
            //5. udate budget
            updateBudget();            
        }        
    }    
    return {
        init : function(){
            console.log('Application has started.');
            UICtrl.displayBudget( {
                budget :0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    };

})(budgetController,UIController);

controller.init();



//https://developer.mozilla.org/en-US/docs/Web/Events
//Keyboard events
//http://keycodes.atjayjo.com/#charcode