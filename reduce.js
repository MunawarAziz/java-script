const myNumber =  [1, 2, 3, 4]

const mytotal = myNumber.reduce( function (acc, curvel) {
  //  console.log(`acc: ${acc} and curvel: ${curvel}`);
    
   // return acc + curvel
},0 )

 //console.log(mytotal);
 

 const mynumber = [1, 2, 3]

const newNam = mynumber.reduce( (acc,curvel) =>acc + curvel ,0 );

console.log(newNam);
