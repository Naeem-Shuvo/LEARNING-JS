class person{
    static count=0;
    constructor(name,age){
        this.name=name;
        this.age=age;
        person.count++;
    }
    getCount(){
        return person.count;
    }
}
const p1=new person("Alice",30);
const p2=new person("Bob",25);

console.log(person.getCount()); //this will give error because getCount is not static method
console.log(person.count); //2
console.log(p1.getCount()); //2
console.log(p2.getCount()); //2