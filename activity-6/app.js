// p.86 - 6. changing element attributes

// store an image element

const image = document.getElementById("image");
const input = document.getElementById("input");
const button = document.getElementById("submit");

submit.addEventListener("click", () => {
   image.src = input.value;
})