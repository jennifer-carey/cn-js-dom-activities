// pg 78 - 5. textContent and innerHTML activities

const placeholder = document.getElementById("placeholder");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");

// inputs text value of input into h1 eg "hello"
// submit.addEventListener("click", () => {
//    placeholder.style.color = "goldenrod";
//    placeholder.textContent = input.value;
// })

// inputs ALL value of input into h1 eg "<li>hello</li>"
submit.addEventListener("click", () => {
   placeholder.style.color = "goldenrod";
   placeholder.textContent = `<li>${input.value}</li>`;
   // replaces all list content in html so "- hello"
   list.innerHTML = `<li>${input.value}</li>`;
})