//creating elemenets
// const h1 = document.createElement("h1");
// h1.textContent = "Sithum Jeevantha";
// h1.classList.add("greetings");
// console.log(h1);

//appending the created element
// const body = document.body;
// body.appendChild(h1);

//insert before
// const ul = document.querySelector("ul");
// const newLi = document.querySelector("li");
// newLi.innerText = "New li tag";
// ul.appendChild(newLi);

//selector.insertBefore(what,where)
// const firstLi = document.querySelector("li");
// ul.insertBefore(newLi, firstLi);

//insert adjacents
// const firstP = document.querySelector("p");
// const i = document.createElement("i");
// i.innerText = "Italic text";
// i.style.color = "skyblue";
// firstP.insertAdjacentElement("beforebegin", i);
// firstP.insertAdjacentElement("beforeend", i);
// firstP.insertAdjacentElement("afterbegin", i);
// firstP.insertAdjacentElement("afterend", i);

//
//--------------------------------

// const section = document.querySelector("section");

// const i = document.createElement("i");
// i.innerText = "Italic text";
// i.style.color = "skyblue";

// const span = document.createElement("span");
// span.innerText = "Sithum";
// span.style.color = "crimson";

// section.append(i, span);   //add at the end
// section.prepend(i, span);  //add at the begining

//------------------------------
// const newlist = document.querySelector("new-list");
// const fourth = document.querySelector(".fourth");
// newlist.removeChild(fourth);
// newlist.remove();
