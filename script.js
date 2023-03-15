let i = 0;
let l=0;
let txt = 'Hussein Yazbeck                 ';
let count=0;
let speed = 200;
typeWriter();
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  change();
 
}
 function change(){   

  if (i == txt.length ) {
    if(count == 0 ){
    txt=' Applikatsionsentwickler in Ausbildung ';
    count++;
}
else{
    txt='Hussein Yazbeck                 ';
    count--;
}
    
    document.getElementById("typing").innerHTML = "";
 i=0;
 
  }
  
  

}