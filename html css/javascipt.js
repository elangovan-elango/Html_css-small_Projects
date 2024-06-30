var name ="hello";
var n2 = 20;


var no =[5,56,65,78]
no.push("hello");

var person = {
    fname:"elango",
    lname:"me",
    age :22,
    address :{
        street:3,
        city :"kodai",
        state:"TN"
    }
}


function animal(name,type, color){

    this.name=name;
    this.type=type;
    this.color=color;
}
var tiger =new animal("tiger","killer","orange")
var rabbit = new animal("rabbit","soft","white")
console.log(rabbit);