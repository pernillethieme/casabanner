// JavaScript Document

//åben side når man klikker på banner 
let element = document.querySelector(“.banner”); 
element.addEventListener(“click”, goToSomePage);

function goToSomePage(){ 
window.open( 
“http://www.bluetaco.dk", ‘_blank’); }


