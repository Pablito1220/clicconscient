document.addEventListener("click", onClick);
let container = document.getElementById("container");
let counter = 0;
let widthImg = 609 * 0.6;
let heightImg = 609 * 0.6;
let arrayImgs = document.getElementsByTagName("img");
let nbImages = 18;
onClick();
function onClick() {
  let index = counter % nbImages + 1;
  let image = new Image();
  image.src = "img/img" + index + ".png"
  let img = document.createElement("img");
  img.className = "image";
  img.src = image.src;
  let top = Math.random() * (window.innerHeight - heightImg * 0.8);
  let left = Math.random() * (window.innerWidth - (widthImg / 1.8));
  let rotation = getRandomArbitrary(2, -1) * 40;
  img.style.setProperty("top", top + "px");
  img.style.setProperty("transform", "rotate(" + rotation + "deg)");
  img.style.setProperty("left", left + "px");
  img.className = "image"
  if (arrayImgs.length < 4) {
    document.body.appendChild(img);
    console.log(arrayImgs[0])
  } else {
    console.log(arrayImgs[0])
    arrayImgs[0].remove;
    document.body.appendChild(img);
  }
  counter++;
}
function getRandomArbitrary(range, min) {
  let value = Math.random() * range + min;
  return value
}
