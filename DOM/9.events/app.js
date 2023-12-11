// events are the interactions with the HTML(click,drag)
//
//-----------------------------------------------------------------

//-----------------------------inline way(in html file)------------
// <!--Bad way(inline)-->
// <button onclick="alert('Bad Way Bosa')">Click Me</button>

//
//------------------------bad way---------------------------
// const btnTwo = document.querySelector(".second-button");
// btnTwo.onclick = alert("another bad way");

//

//-------------------best way---------------------

// const best = document.querySelector(".best");
// best.addEventListener("click", function () {
//   alert("best way");
// });

// const best = document.querySelector(".best");
// function greetings() {
//   alert("best way");
// }
// best.addEventListener("click", greetings);

//

//----------------------event Object---------------------------

// const para = document.querySelector(".para");
// para.addEventListener("click", (event) => {
//   console.log(event);
// });

// const input = document.querySelector("input");
// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(input.value);
// });
