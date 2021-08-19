//here is a one line solution
document.querySelectorAll(".drum").forEach((element) => {
  element.addEventListener("click", function () {
    var audio = new Audio("sounds/" + this.classList[0] + ".mp3");
    audio.play();
    buttonAnimation(this);
  });
});
document.addEventListener("keypress", function (event) {
  var key = event.key;
  var a = document.querySelector(".set").children;
  for (var i = 0; i < a.length; i++) {
    if (a[i].innerText == key) {
      a[i].click();
    }
  }
});
function buttonAnimation(element) {
  element.classList.add("pressed");
  setTimeout(function (){
    element.classList.remove("pressed");
  },100 );
}

