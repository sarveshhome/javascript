//Budget Controller
var budgetController = (function(){
    

})();

//UI Controller
var UIController = (function(){
        //some code;
});

//Global APP Controller
var controller = (function(budgetCtrl,UICtrl){

    var ctrlAddItem = function(){
        //1. Get the field input data

        //2.  Add the item to the budget controller

        //3. Add the item to the UI

        //4. Calculate the budget 

        //5. Display the budget on the UI
        console.log('Add Item Function Work');
    };
    
    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);    

    document.addEventListener('keypress',function(event){
        console.log(event);
        if (event.keyCode ===13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController,UIController);






//https://developer.mozilla.org/en-US/docs/Web/Events
    //Keyboard events
    //http://keycodes.atjayjo.com/#charcode