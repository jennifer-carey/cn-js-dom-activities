const input = document.getElementById("input");
const button = document.getElementById("submit");
const list = document.querySelector("#list");
const removebtn = document.querySelector("#remove");

button.addEventListener("click", () => {
   let listItem = document.createElement("li"); 
   listItem.textContent = input.value;
   
   list.appendChild(listItem);
   input.value = "";
})

removebtn.addEventListener("click", () => {
   let lastItem = document.querySelector("#list li:last-child")
   list.removeChild(lastItem);
   // can also be written on one line
   //list.removeChild(document.querySelector("#list li:last-child"));
})