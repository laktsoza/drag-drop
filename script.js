
const container = document.querySelector(".container");

const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const gray = document.querySelector(".gray");
const brown = document.querySelector(".brown");


container.addEventListener('dragstart', e => {
  if(e.target === e.currentTarget) {
    return;
  }
    e.dataTransfer.setData('id', e.target.id);
});


container.addEventListener("dragover", e => {
    e.preventDefault();
});


container.addEventListener('drop', e => {

  const id = e.dataTransfer.getData("id");

  let class1 = document.getElementById(id).classList[0];
  let class2 = e.target.classList[0];

  if(e.target.className !== 'container') {
    document.getElementById(id).classList.remove(class1);
    document.getElementById(id).classList.add(class2);
  
    e.target.classList.remove(class2);
    e.target.classList.add(class1);
  };
});




