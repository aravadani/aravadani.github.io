
function pathOnDiv(no, pos)
{
   // Get the coordinates of the point that is the fraction 'pos' along the path
   var  path = document.getElementById("mypath");
   var  pathLength = path.getTotalLength();
   var  loc = path.getPointAtLength(pos * pathLength);
   let obj = {
     x: loc.x,
     y: loc.y,
     no: no
   };
   iconPos.push(obj);
   //console.log(loc);
   var el = document.querySelector(icons[no]);
   el.style.left = loc.x + "px";
   el.style.top = loc.y + "px";
}

let icons = [".mail", ".linkedin", ".instagram", ".github", ".troylabs", ".spotify"];
let iconPos = [];

pathOnDiv(2, 0/6);
pathOnDiv(3, 1/6);
pathOnDiv(4, 2/6);
pathOnDiv(5, 3/6);
pathOnDiv(0, 4/6);
pathOnDiv(1, 5/6);

console.log(iconPos);

/*
anime({
  targets: '.mail',
  top: iconPos[].x + "px",
  left: iconPos[].y + "px",
  delay: 1000,
  loop: true
});
*/
