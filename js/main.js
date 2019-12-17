let container = document.getElementById("container");
let counter = 0;
let widthImg = 400;
let heightImg = 400;
let arrayImgs = document.getElementsByTagName("img");
let nbImages = 18;
let imgs = [];

function setup() {
  for (let i = 1; i < 19; i++) {
    let image = new Image();
    image.src = "../img/img" + i + ".jpg";
    imgs.push(image);
  }
  document.addEventListener("click", onClick);
  onClick();
}

function onClick() {
  let index = counter % nbImages;
  let img = document.createElement("img");
  img.className = "image";
  img.src = imgs[index].src;
  let top = Math.random() * (window.innerHeight - heightImg * 0.7);
  let left = Math.random() * (window.innerWidth - (widthImg / 1.5));
  let rotation = getRandomArbitrary(2, -1) * 40;
  img.style.setProperty("top", top + "px");
  img.style.setProperty("transform", "rotate(" + rotation + "deg)");
  img.style.setProperty("left", left + "px");
  img.className = "image"
  if (arrayImgs.length < 4) {
    document.body.appendChild(img);
  } else {
    arrayImgs[0].remove;
    document.body.appendChild(img);
  }
  counter++;
}

function getRandomArbitrary(range, min) {
  let value = Math.random() * range + min;
  return value
}
window.addEventListener("DOMContentLoaded", (event) => {
  setup();
});
