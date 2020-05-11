document.getElementById('red').onclick = switchRed;
document.getElementById('orange').onclick = switchOrange;
document.getElementById('yellow').onclick = switchYellow;
document.getElementById('green').onclick = switchGreen;
document.getElementById('blue').onclick = switchBlue;
document.getElementById('indio').onclick = switchIndigo;
document.getElementById('purple').onclick = switchPurple;

function switchRed() {
  document.getElementsByTagName('body')[0].style.backgroundColor = "red";
  document.getElementsByTagName('body')[0].style.color = "white";
}

function switchOrange() {
  document.getElementsByTagName('body')[0].style.backgroundColor = "orange";
  document.getElementsByTagName('body')[0].style.color = "white";
}

function switchYellow() {
  document.getElementsByTagName('body')[0].style.backgroundColor = "yellow";
  document.getElementsByTagName('body')[0].style.color = "white";
}

function switchGreen() {
  document.getElementsByTagName('body')[0].style.backgroundColor = "green";
  document.getElementsByTagName('body')[0].style.color = "white";
}

function switchBlue() {
  document.getElementsByTagName('body')[0].style.backgroundColor = "blue";
  document.getElementsByTagName('body')[0].style.color = "white";
}

function switchIndigo() {
  document.getElementsByTagName('body')[0].style.backgroundColor = "indigo";
  document.getElementsByTagName('body')[0].style.color = "white";
}
function switchPurple() {
  document.getElementsByTagName('body')[0].style.backgroundColor = "purple";
  document.getElementsByTagName('body')[0].style.color = "white";
}
