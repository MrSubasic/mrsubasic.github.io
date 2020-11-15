function Active(x) {
  x.style.backgroundColor="#f6f6f6";
  }
function notActive(x) {
  x.style.backgroundColor="#ffffff";
  }

var i=0;

function read(){
  if(!i){
    document.getElementById("more").style.
      display="inline";
    document.getElementById("dots").style.
      display="none";
    document.getElementById("read").innerHTML="Read less  "
      display="none";
    i=1;
  }
  else{
    document.getElementById("more").style.
      display="none";
    document.getElementById("dots").style.
      display="inline";
    document.getElementById("read").innerHTML="Read more"
      display="none";
    i=0;
  }
}
