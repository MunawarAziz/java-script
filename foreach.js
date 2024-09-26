const courses = ["java", "css", "html", "phyton"]

// const newcourses = courses.forEach( (items) => {
//     console.log(items);
    
//     return items
// } )

// console.log(newcourses);

// const newcourses = courses.forEach( (item) =>(console.log(item)));

// const newcourses = courses.filter( (item) => {return item === "java"
//  })

//    console.log(newcourses);


 const mynum = [1, 2, 3, 4, 5]
 
// const newnum =mynum.filter( (num) =>{
//   if(num > 2){
//     return num
//   }
// } )

//console.log(newnum);


const newnum = []
 
    mynum.forEach( (num) =>{
  if(num <= 3){
    return newnum.push(num)
  }
} )

console.log(newnum);

            