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

let current = 0;

let currentImg = document.getElementsByTagName("IMG");
let currentTitle = document.getElementsByTagName("H2");
let currentText = document.getElementsByTagName("P");
let imgActive = document.getElementsByClassName("aside-img");
currentImg[current].classList.add("current");
currentTitle[current].classList.add("current");
currentText[current].classList.add("current");
imgActive[current].classList.add("active");

buttonDown.addEventListener("click",
  function(){
    if(current < img.length -1){
      currentImg[current].classList.remove("current");
      currentTitle[current].classList.remove("current");
      currentText[current].classList.remove("current");
      imgActive[current].classList.remove("active");
      current++;
      currentImg[current].classList.add("current");
      currentTitle[current].classList.add("current");
      currentText[current].classList.add("current");
      imgActive[current].classList.add("active");
      
    } else if(current == img.length -1){

      currentImg[current].classList.remove("current");
      currentTitle[current].classList.remove("current");
      currentText[current].classList.remove("current");
      imgActive[current].classList.remove("active");
      
      current = 0;
      
      currentImg[current].classList.add("current");
      currentTitle[current].classList.add("current");
      currentText[current].classList.add("current");
      imgActive[current].classList.add("active");
    }
  }
)
buttonUp.addEventListener("click",
  function(){
    if(current < img.length && current != 0){
      currentImg[current].classList.remove("current");
      currentTitle[current].classList.remove("current");
      currentText[current].classList.remove("current");
      imgActive[current].classList.remove("active");
      current--;
      currentImg[current].classList.add("current");
      currentTitle[current].classList.add("current");
      currentText[current].classList.add("current");
      imgActive[current].classList.add("active");

    } else if(current == 0){

      currentImg[current].classList.remove("current");
      currentTitle[current].classList.remove("current");
      currentText[current].classList.remove("current");
      imgActive[current].classList.remove("active");
      
      current = img.length -1;

      currentImg[current].classList.add("current");
      currentTitle[current].classList.add("current");
      currentText[current].classList.add("current");
      imgActive[current].classList.add("active");
    }
  }
)