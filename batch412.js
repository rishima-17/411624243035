console.log("external JS")
const a=10;
const b=20;
console.log(a+b)
const str="String"
console.log(str)
const arr=[1,2.1,"str",false]
arr[1]=3.1
console.log(arr[1])
arr.push(4)
console.log(arr) 

function example(){
    console.log("writing...")
}
const access=document.getElementById("ptag")
access.innerHTML="paragraph"

const input=document.getElementById("input")
const output=document.getElementById("inputField")

input.addEventListener("input",()=>{
    output.textContent=input.value
})
const first =document.createElement("p")
first.textContent= "some text"
document.body.appendChild(first)

first.remove()