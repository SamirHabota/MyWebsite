const path = "img/parallax/backgrounds/";
const imageId = "bakgroundImageId";
const imageExtension = ".jpg";
const msIntervalForImageChanges = 15000;
const cycle = true;
const numberOfImages = 10;

async function loadNewImage() {
  var backgroundImage = document.getElementById(imageId);
  var imageNumbersArray = [];
  for (let i = 1; i <= numberOfImages; i++) imageNumbersArray.push(i);
  backgroundImage.setAttribute(
    "src",
    path +
      imageNumbersArray[Math.floor(Math.random() * imageNumbersArray.length)] +
      imageExtension
  );
}

async function changeImage() {
  while (true) {
    await new Promise((resolve) =>
      setTimeout(resolve, msIntervalForImageChanges)
    );
    loadNewImage();
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  loadNewImage();
  if (cycle) changeImage();
});
