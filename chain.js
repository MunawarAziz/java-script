const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnum = num.map( (num) => num * 8 )
                  .map( (num) => num + 3 )
                  .filter( (num) => num >= 30)

//console.log(newnum);

const collection =["html", "css", "bootstrap", "javascript", "node js"]

const newcollection = collection.map( (nam) => `web devolepment: ${nam}` )

console.log(newcollection);
