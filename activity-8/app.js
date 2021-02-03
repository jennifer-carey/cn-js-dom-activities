const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const list = document.querySelector("#list");
const hideshow-btn = document.querySelector("#hideshow-btn");

submit.addEventListener("click", () => {
   let listItem = document.createElement("li"); 
   listItem.textContent = input.value;
   //console.log(listItem);
   list.appendChild(listItem);
   input.value = "";
})