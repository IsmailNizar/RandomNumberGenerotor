
let getrandomnumber = function(){

  let start = document.querySelector("#min").value;
  let end = document.querySelector("#max").value;
  if(start == "" || end == "" ){
    document.querySelector("#result").innerHTML = "Try Again....";
  }
  else if(start > end){
    document.querySelector("#result").innerHTML = start +">"+ end +" Try to change numbers....";
  }
  else {
    let min = parseInt(start);
    let max =parseInt(end);
   let GetNb = Math.floor(( Math.random() * max ) + min);
   while(GetNb > max){
     GetNb = Math.floor(( Math.random() * max ) + min);
   }
   document.querySelector("#result").innerHTML = GetNb;
  } 
}
 let reset = function(){
  document.querySelector("#min").value = "";
  document.querySelector("#max").value = "";
  document.querySelector("#result").innerHTML = "";
 }