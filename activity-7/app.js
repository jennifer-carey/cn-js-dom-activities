// p.96 - 7. styling elements

const image = document.getElementById("dog");

const button = document.getElementById("submit");

// my original solution
// button.addEventListener("click", () => {
//    image.src = "";
//    button.textContent = "show";
//    button.addEventListener("click", () => {
//       image.src = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg?resize=750px:*";
//       button.textContent = "hide";
//    })
// })

// suggested solution
button.addEventListener("click", () => {
   if (image.style.display == "none") {
      image.style.display = "block";
      button.textContent = "hide";
   } else {
      image.style.display = "none";
      button.textContent = "show";
   }
})