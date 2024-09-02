/**
 *Checking if it's an Array
 
Instructions:

*Create different variables, each containing either an array or a non-array value.
*Now use isArray to check if each variable is an array.
*Print a message to the console indicating whether each variable is an array or not.


 */


const name11 = [11, 56, 98, 155, 55];
const num11 = "Go To";

let name1 = Array.isArray(name11)
let num1 = Array.isArray(num11)

if(name1 === true){
  console.log("name11 is Array");
  if(num1 === true){
    console.log("naum11 is array");
  }
  else{
    console.log("num11 is not array");
  }

}
else{
  console.log("name11 is Not Array");
  if(num1 === true){
    console.log("naum11 is array");
  }
  else{
    console.log("num11 is not array");
  }
}