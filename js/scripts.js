let IMG = document.querySelector("img");
var check = true;
function flip() {
  if(check)
  {
    IMG.src = "images/Wink.png";
    check = !check;
  }
  else{
    IMG.src = "images/Smile.png";
    check = !check;
  }
}
 window.setInterval(flip, 700);

//onmouseover="this.src='images/Wink.png';" onmouseout="this.src='images/Smile.png';"
