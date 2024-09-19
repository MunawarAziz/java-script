const user ={
    value: 8,

    returnMessege: function(){
        console.log(`return value is :${this.value}`)
       // console.log(this)
      //  user.returnMessege()
    }
}
user.returnMessege() 
user.value = 9;
user.returnMessege()
    
//console.log(this) // in node this refer empty object{}// and browser the global object is window 

const add = (a, b) => {
    return  a + b
}
console.log(add(9,4));

//impleser return

const addtwo = (a, b) => a + b

console.log(addtwo(3,7));

//for object

const addthree = () => ({username: "db connector", value: 0})

console.log(addthree());