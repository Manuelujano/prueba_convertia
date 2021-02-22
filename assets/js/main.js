let modal = document.getElementById("modal_tel");
let modal2 = document.getElementById("modal_ubi");
let btn = document.getElementById("tel");
let btn2 = document.getElementById("ubi");
let span = document.getElementsByClassName("close-modal")[0];
let span2 = document.getElementsByClassName("close-modal2")[0];

btn.onclick = function(e) {
  e.preventDefault();
  modal.style.visibility = "visible";
  modal.style.opacity = "1";

}

span.onclick = function() {
  modal.style.visibility = "hidden";

}



btn2.onclick = function(e) {
  e.preventDefault();
  modal2.style.visibility = "visible";
  modal2.style.opacity = "1";

}

span2.onclick = function() {
  modal2.style.visibility = "hidden";

}


