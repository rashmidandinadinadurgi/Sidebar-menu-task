
// var onClick=false;
// var main=document.getElementById("main");
// var menuToggler=document.getElementById("menuToggler");

// menuToggler.addEventListener("click",classChanger)

// function classChanger(){
//     onClick=!onClick;
//     console.log(main.classList);
//     onClick? (main.classList.add("msb-x")):(main.classList.remove("msb-x"));
// } 
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}