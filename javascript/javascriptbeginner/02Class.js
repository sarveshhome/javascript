function Customer()
{
     var _CustomerName ="";
     var _CustomerCode ="";

     this.setCustomerCode = function(value){
         _CustomerCode = value;
     }
     this.getCustomerCode = function()
     {
         return _CustomerCode;
     }
     this.setCustomerName = function(value)
     {
         if (value.length ==0) {
             return;
         }
         _CustomerName =value;
     }
     this.getCustomerName = function()
     {
         return _CustomerName;
     }
     
     this.submit = function(){
            console.log("Submit " + this._CustomerName + " " + this._CustomerCode);
     }



}

var cust = new Customer();
cust.setCustomerName("Rudhra");
cust.setCustomerCode("001");
