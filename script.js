console.log("Hello world");
const a = 20;
const b = 30;
console.log(a+b);
const str = "Sanjana";
console.log(str);
const arr = [1,2,3,"String",false]
console.log(arr);
for(let i=0;i <arr.length;i++){
    console.log(arr[i]);
}
arr[1]=3.1;
console.log(arr[1]);
arr.push("Sanjana");
console.log(arr);
arr.pop()
console.log(arr);

function example(){
    console.log("I am writing the function");
}
const ptag = document.getElementById("ptag");
ptag.innerHTML = "Print Statement";

const input= document.getElementById("input");
const output = document.getElementById("inputField");

input.addEventListener("input",()=>{
    output.textContent = input.value
})
const first = document.createElement("h1")
first.textContent = "Hello Everyone"
document.body.appendChild(first);

first.remove()