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