class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    //inside class , WE DONT NEED TO USE FUNCTION KEYWORD
    //in object we wrote ""display: function(){}""
    display(){
        console.log(`Product Name: ${this.name}, Price: $${this.price}`);
    }
    includeVAT(vat){
        return this.price + (this.price * vat / 100);
    }
}
//creating object of class
const prod1=new Product("laptop",1200);
const prod2=new Product("phone",800);

prod1.display(); //Product Name: laptop, Price: $1200
prod2.display(); //Product Name: phone, Price: $800

console.log(`price of ${prod1.name} inlcuding VAT: $${prod1.includeVAT(10)}`); //price of laptop inlcuding VAT: $1320
console.log(`price of ${prod2.name} inlcuding VAT: $${prod2.includeVAT(10)}`); //price of phone inlcuding VAT: $880