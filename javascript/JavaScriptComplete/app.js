//Budget Controller
var budgetController = (function(){
    

})();

//UI Controller
var UIController = (function(){
        return {
            getInputs : function(){
                return {
                        type :document.querySelector('.add__type').value, //inc and exp
                        description : document.querySelector('.add__description').value, //description
                        value  :parseFloat(document.querySelector('.add__value').value) //value
                };
                // var type =document.querySelector('.add__type').value; //inc and exp
                // var description = document.querySelector('.add__description').value ; //description
                // var value  = document.querySelector('.add__value').value; //value

            }
        };
        
});

//Global APP Controller
var controller = (function(budgetCtrl,UICtrl){

    var ctrlAddItem = function(){
        //1. Get the field input data
        var input1 = UICtrl
        console.log(input1);
        //2.  Add the item to the budget controller

        //3. Add the item to the UI

        //4. Calculate the budget 

        //5. Display the budget on the UI
        console.log('Add Item Function Work');
    };
    
    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);    

    document.addEventListener('keypress',function(event){
        //console.log(event);
        if (event.keyCode ===13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController,UIController);






//https://developer.mozilla.org/en-US/docs/Web/Events
    //Keyboard events
    //http://keycodes.atjayjo.com/#charcode