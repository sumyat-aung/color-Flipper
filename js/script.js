// grab necessary Element
const btn = document.getElementById("btn");
const box = document.getElementById("box");
const color = document.getElementById("color");

// Array
let colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Click event
btn.addEventListener("click", function () {
  let hexcolor = "#";
  // looping through 6 words
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * colorArray.length);
    hexcolor += colorArray[random];
  }
  // changing
  color.textContent = "color:" + " " + hexcolor + ";";
  box.style.backgroundColor = hexcolor;

  // coping hex-code event

  box.addEventListener("click", function () {
    // copy hex-code
    navigator.clipboard.writeText(hexcolor);
  });
});

// coping the original (before generating) hex code

box.addEventListener("click", function () {
  // copy hex-code
  navigator.clipboard.writeText("#9dc1b4");

  // "copied text to show after we click "
  box.classList.add("active");
  setTimeout(() => {
    box.classList.remove("active");
  }, 1000);
});
