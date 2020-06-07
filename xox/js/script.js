var pemain ="X";

document.getElementById("ket").innerHTML="Giliran Pemain : " +pemain;
function kliktombol(x){
  document.getElementById("btn"+x+"A").innerHTML=pemain;
  document.getElementById("btn"+x+"A").value=pemain;
  document.getElementById("btn"+x+"A").disabled="disabled";
  if(pemain == "X"){
    document.getElementById("ket").innerHTML="Giliran Pemain : O";
    cekpemenang();
    pemain = "O";
  }else{
    document.getElementById("ket").innerHTML="Giliran Pemain : X";
    cekpemenang();
    pemain = "X";
  }
}
function cekpemenang(){
  // kiri ke kanan (HORIZONTAL)
  if(
    document.getElementById("btn1A").value==pemain &&
    document.getElementById("btn2A").value==pemain &&
    document.getElementById("btn3A").value==pemain &&
    document.getElementById("btn4A").value==pemain 
  ){
  menang();
}else if (
  document.getElementById("btn6A").value==pemain &&
  document.getElementById("btn7A").value==pemain &&
  document.getElementById("btn8A").value==pemain &&
  document.getElementById("btn9A").value==pemain
){
  menang();
}else if(
  document.getElementById("btn11A").value==pemain &&
  document.getElementById("btn12A").value==pemain &&
  document.getElementById("btn13A").value==pemain &&
  document.getElementById("btn14A").value==pemain

){
  menang();
}else if(
  document.getElementById("btn16A").value==pemain &&
  document.getElementById("btn17A").value==pemain &&
  document.getElementById("btn18A").value==pemain &&
  document.getElementById("btn19A").value==pemain 
){
menang();
}else if(
  document.getElementById("btn21A").value==pemain &&
  document.getElementById("btn22A").value==pemain &&
  document.getElementById("btn23A").value==pemain &&
  document.getElementById("btn24A").value==pemain 
){
menang();
}
// kanan ke kiri (HORIZONTAL)
else if(
  document.getElementById("btn5A").value==pemain &&
  document.getElementById("btn4A").value==pemain &&
  document.getElementById("btn3A").value==pemain &&
  document.getElementById("btn2A").value==pemain 
){
menang();
}else if(
  document.getElementById("btn10A").value==pemain &&
  document.getElementById("btn9A").value==pemain &&
  document.getElementById("btn8A").value==pemain &&
  document.getElementById("btn7A").value==pemain 
){
menang();
}else if(
  document.getElementById("btn15A").value==pemain &&
  document.getElementById("btn14A").value==pemain &&
  document.getElementById("btn13A").value==pemain &&
  document.getElementById("btn12A").value==pemain 
){
menang();
}else if(
  document.getElementById("btn20A").value==pemain &&
  document.getElementById("btn19A").value==pemain &&
  document.getElementById("btn18A").value==pemain &&
  document.getElementById("btn17A").value==pemain 
){
  menang();
}else if(
  document.getElementById("btn25A").value==pemain &&
  document.getElementById("btn24A").value==pemain &&
  document.getElementById("btn23A").value==pemain &&
  document.getElementById("btn22A").value==pemain 
){
  menang();
}
// atas ke bawah (VERTIKAL)
else if(
  document.getElementById("btn1A").value==pemain &&
  document.getElementById("btn6A").value==pemain &&
  document.getElementById("btn11A").value==pemain &&
  document.getElementById("btn16A").value==pemain 
){
  menang();
}else if(
  document.getElementById("btn2A").value==pemain &&
  document.getElementById("btn7A").value==pemain &&
  document.getElementById("btn12A").value==pemain &&
  document.getElementById("btn17A").value==pemain 
){
  menang();
}else if(
  document.getElementById("btn3A").value==pemain &&
  document.getElementById("btn8A").value==pemain &&
  document.getElementById("btn13A").value==pemain &&
  document.getElementById("btn18A").value==pemain 
){
  menang();
}else if(
  document.getElementById("btn4A").value==pemain &&
  document.getElementById("btn9A").value==pemain &&
  document.getElementById("btn14A").value==pemain &&
  document.getElementById("btn19A").value==pemain 
){
  menang();
}else if(
  document.getElementById("btn5A").value==pemain &&
  document.getElementById("btn10A").value==pemain &&
  document.getElementById("btn15A").value==pemain &&
  document.getElementById("btn20A").value==pemain 
){
  menang();
}
// dari bawah ke atas (VERTIKAL)
else if(
  document.getElementById("btn21A").value==pemain &&
  document.getElementById("btn16A").value==pemain &&
  document.getElementById("btn11A").value==pemain &&
  document.getElementById("btn6A").value==pemain 
){
  menang();
}else if(
  document.getElementById("btn22A").value==pemain &&
  document.getElementById("btn17A").value==pemain &&
  document.getElementById("btn12A").value==pemain &&
  document.getElementById("btn7A").value==pemain 
){
  menang();
}else if(
  document.getElementById("btn23A").value==pemain &&
  document.getElementById("btn18A").value==pemain &&
  document.getElementById("btn13A").value==pemain &&
  document.getElementById("btn8A").value==pemain 
){
  menang();
}else if(
  document.getElementById("btn24A").value==pemain &&
  document.getElementById("btn19A").value==pemain &&
  document.getElementById("btn14A").value==pemain &&
  document.getElementById("btn9A").value==pemain 
){
  menang();
}else if(
  document.getElementById("btn25A").value==pemain &&
  document.getElementById("btn20A").value==pemain &&
  document.getElementById("btn15A").value==pemain &&
  document.getElementById("btn10A").value==pemain 
){
  menang();
}
// silang mode (silang eliminasi)atas ke bawah
else if(
  document.getElementById("btn1A").value==pemain &&
  document.getElementById("btn7A").value==pemain &&
  document.getElementById("btn13A").value==pemain &&
  document.getElementById("btn19A").value==pemain 
){
  menang();
}else if(
  document.getElementById("btn25A").value==pemain &&
  document.getElementById("btn19A").value==pemain &&
  document.getElementById("btn13A").value==pemain &&
  document.getElementById("btn7A").value==pemain 
){
  menang();
}else if(
  document.getElementById("btn2A").value==pemain &&
  document.getElementById("btn8A").value==pemain &&
  document.getElementById("btn14A").value==pemain &&
  document.getElementById("btn20A").value==pemain 
){
  menang();
}else if(
  document.getElementById("btn5A").value==pemain &&
  document.getElementById("btn9A").value==pemain &&
  document.getElementById("btn13A").value==pemain &&
  document.getElementById("btn17A").value==pemain 
){
  menang();
}else if(
  document.getElementById("btn4A").value==pemain &&
  document.getElementById("btn8A").value==pemain &&
  document.getElementById("btn12A").value==pemain &&
  document.getElementById("btn16A").value==pemain 
){
  menang();
}
// silang mode (silang eliminasi)atas ke bawah
else if(
  document.getElementById("btn21A").value==pemain &&
  document.getElementById("btn17A").value==pemain &&
  document.getElementById("btn13A").value==pemain &&
  document.getElementById("btn9A").value==pemain 
){
  menang();
}else if(
  document.getElementById("btn22A").value==pemain &&
  document.getElementById("btn18A").value==pemain &&
  document.getElementById("btn14A").value==pemain &&
  document.getElementById("btn10A").value==pemain 
){
  menang();
}
else if(
  document.getElementById("btn25A").value==pemain &&
  document.getElementById("btn19A").value==pemain &&
  document.getElementById("btn13A").value==pemain &&
  document.getElementById("btn7A").value==pemain 
){
  menang();
}else if(
  document.getElementById("btn24A").value==pemain &&
  document.getElementById("btn18A").value==pemain &&
  document.getElementById("btn12A").value==pemain &&
  document.getElementById("btn6A").value==pemain 
){
  menang();
}
}

// jika menang akan menampilkan pop up
function menang(){
  alert("Pemenangnya adalah pemain "+pemain)
  location.reload();
  for(i=1;i<10;i++){
    document.getElementById("btn"+i+"A").disabled="disabled";
  }
} 
