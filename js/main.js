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
  let top = Math.random() * (window.innerHeight - heightImg * 0.7);
  let left = Math.random() * (window.innerWidth - (widthImg / 1.5));
  // let left = "200 px";
  // let top = "200 px";
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
    // document.body.replaceChild(img, arrayImgs);
  }
  // if (counter < 2) {
  //   document.body.appendChild(img);
  // } else {
  //   let documentLength = document.body.children.length
  //   console.log(arrayImgs)
  //   // document.body.children[documentLength].remove();
  // }
  counter++;
  console.log("top: " + top);
  console.log("left: " + left)
}

function getRandomArbitrary(range, min) {
  let value = Math.random() * range + min;
  // console.log(value)
  return value
}
