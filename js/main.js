let containerImg = document.querySelector(".box-principal-img");
let titleImg = document.getElementById("title");
let textImg = document.getElementById("text-title");
let asideImg = document.querySelector(".box-aside-img");
let buttonDown = document.getElementById("down");
let buttonUp = document.getElementById("up");
console.log(buttonDown);
console.log(titleImg);

const img = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];
const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]
const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]
let slides = "";
let contentTitle = "";
let contentText = "";
let aside = "";

for (let i=0; i < img.length; i++){

  slides +=`<img src="${img[i]}">`;

  contentTitle += `<h2>${title[i]}</h2>`;

  contentText += `<p>${text[i]}</p>`;
  
  aside += `<div class="aside-img">
              <img src="${img[i]}">
            </div>`;
}
containerImg.innerHTML = slides;
titleImg.innerHTML = contentTitle;
textImg.innerHTML = contentText;
asideImg.innerHTML += aside;

let currentImg = document.getElementsByTagName("IMG")[0];
let currentTitle = document.getElementsByTagName("H2")[0];
let currentText = document.getElementsByTagName("P")[0];
let imgActive = document.querySelector(".aside-img");
currentImg.classList.add("current");
currentTitle.classList.add("current");
currentText.classList.add("current");
imgActive.classList.add("active");

buttonDown.addEventListener("click",
  function(){
    
  }
)