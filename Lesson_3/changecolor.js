function changeColor() {
  let colors = ["blue", "greeen", "red", "grey", "#ccc", "#800000"];
  let random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];
  console.log(
    "the random number is " + random + " the random color is " + colors[random]
  );
}
