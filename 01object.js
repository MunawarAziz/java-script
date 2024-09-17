//Object
const mysyb = Symbol("key")

const jsuser ={
    [mysyb] : "key 1",
    name : "Munawar",
    age : 23,
    email: "aziz09126789@gmail.com",
    location:"hostel city"

}

//console.log(jsuser.name);
//console.log(jsuser["age"]);
//console.log(typeof jsuser[mysyb]);

jsuser.age = 56;
//console.log(jsuser);

//Object.freeze(jsuser);
jsuser.age = 78;
//console.log(jsuser);


jsuser.greeting = function(){
    console.log("aoa js user");
}
jsuser.greetingTwo = function(){
    console.log(`aoa js user, ${this.name}`)
}


console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
