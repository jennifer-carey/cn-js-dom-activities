// page 66 USING QUERY SELECTORS

// const item1 = document.querySelectorAll("li");
// const item2 = document.querySelector("li");

// console.log(item1);
// console.log(item2);

// const item3 = document.querySelector("#heading");

// console.log(item3);

// const item4 = document.querySelector(".list-parent");
// const item5 = document.querySelectorAll(".green");

// console.log(item4);
// console.log(item5);

// const listItems = document.querySelectorAll("li:nth-child(even)");

// console.log(listItems);
// console.log(listItems.length);

// Use a for loop to display all even items to have text colour “lightgreen”.

// using a for..of loop -
// for (let l of listItems) {
//    l.style.color = "lightgreen";
// }

//using a for loop -
// for (let item = 0; item < listItems.length; item++) {
//    listItems[item].style.color = "lightgreen";
// }

// CHALLENGE

const listItems = document.querySelectorAll("li");

const colors = ["red", "orange", "goldenrod", "yellow", "pink", "green", "lightblue", "blue", "purple", "grey"];

for (let item = 0; item < listItems.length; item++) {
   listItems[item].style.color = colors[item];
}


