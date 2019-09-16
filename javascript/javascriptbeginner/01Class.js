function Customer() //Class Template
{
    this.CustomerName ="";
    this.CustomerCode ="";
    this.submit =function(){
        // alert("submit"+this.CustomerName + " "+ this.CustomerCode);
        console.log("submit"+this.CustomerName + " "+ this.CustomerCode);
    }
}
var cust = new Customer();//object
cust.CustomerName ="Pratap";
cust.CustomerCode =5455;
cust.submit();