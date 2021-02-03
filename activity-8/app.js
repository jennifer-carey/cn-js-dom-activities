const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const list = document.querySelector("#list");
const hideshow = document.querySelector("#hideshow-btn");

submit.addEventListener("click", () => {
   let listItem = document.createElement("li"); 
   listItem.textContent = input.value;
   //console.log(listItem);
   list.appendChild(listItem);
   input.value = "";
})

hideshow.addEventListener("click", () => {
   if (list.style.display == "block") {
      list.style.display = "none";
      hideshow.textContent = "show";
   } else {
      list.style.display = "block";
      hideshow.textContent = "hide";
   }
})