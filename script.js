let A;
let B;

function calculate() {
  A = parseFloat(document.getElementById("inputNumber").value);
  B = parseFloat(document.getElementById("inputNumber2").value);
  circumference();
  diagonal();
  area();
  greensquare();
}
function circumference() {
  let umfang = 2 * A + 2 * B;
  document.getElementById("circumference").innerHTML = umfang;
}
function diagonal() {
  let d = Math.sqrt(A * A + B * B);
  document.getElementById("diagonal").innerHTML = d;
}
function area() {
  let flaeche = A * B;
  document.getElementById("area").innerHTML = flaeche;
}
function greensquare() {
  let green = document.getElementById("greenqube");
  green.style.display = "block";
  green.style.width = A * 50 + "px";
  green.style.height = B * 50 + "px";
}
document.getElementById("calculateButton").addEventListener("click", calculate);
