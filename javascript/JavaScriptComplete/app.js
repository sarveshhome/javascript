//Budget Controller
var budgetController = (function(){
    
    var Expense  = function(id,description,value){
            this.id = id;
            this.description = description;
            this.value = value;
    }

    var Income  = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data ={
        allItems:{
            exp :[],
            inc: []
        },
        totals :{
            exp:0,
            inc: 0
        }
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
            inputBtn : '.add__btn'
        }

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

    


    var ctrlAddItem = function(){
        var input, newItem;
        //1. Get the field input data
        input = UICtrl.getInputs();
        console.log(input);

        //2.  Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. Add the item to the UI

        //4. Calculate the budget 

        //5. Display the budget on the UI
        //console.log('Add Item Function Work');
    }
    
    return {
        init : function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    };

})(budgetController,UIController);


controller.init();



//https://developer.mozilla.org/en-US/docs/Web/Events
//Keyboard events
//http://keycodes.atjayjo.com/#charcode