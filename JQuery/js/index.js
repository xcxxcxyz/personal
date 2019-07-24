var oBtn = document.getElementById("btn");
var oContainer = document.getElementsByClassName("container")[0];
var oClose = document.getElementById("close");
oBtn.onclick = function () {
  oContainer.style.display = "block";
}
oClose.onclick = function(){
  oContainer.style.display = "none";
}