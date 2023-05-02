function getMotto() {
  let motto = prompt("please enter motto");
  return motto;
}
function getCount() {
  let count = prompt("please enter count");
  return count;
}
function printMotto(motto, count) {
  for (let i = 1; i <= count; i++) {
    console.log(i + ". " + motto);
  }
}
var m = getMotto();
var c = getCount();
printMotto(m, c);
