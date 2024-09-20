//immediately invoked function expressions (iife)

//name iife
(function db(){
      console.log(`db connected`)
}) ();


((name) => {
     console.log(`DB connected to : ${name}`)
})("munawar")