const list = document.getElementsByTagName("li");

console.log(list.length);
console.log(list[0]);
console.log(list[3]);
list[0].style.color = "red";

// change list li to orange
for (let listItem of list) {
   listItem.style.color = "orange";
}

const notOrange = document.getElementsByClassName("not-orange");

// change li with not-orange class to red
for (let listItem of notOrange) {
   listItem.style.color = "red";
}