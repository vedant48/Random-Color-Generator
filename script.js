function changeColor() {
  array = ["A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  // const shuffled = array.sort(function numRandomized() {
    //     return 0.5 - Math.random();
    //   });

  const shuffled = array.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 6);
  let color = "#" + selected.join("");

  document.body.style.backgroundColor = color;
  document.getElementById("text").innerHTML = color;
}