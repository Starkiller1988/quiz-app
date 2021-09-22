const pages = document.querySelectorAll(".page")

const links = document.querySelectorAll("footer a")

links.forEach((link) => {
    link.addEventListener("click", () => {
        pages.forEach((page) => {
        page.classList.remove("current");
        });

const hrefAttribute = link.getAttribute("href");
const nextPage = document.querySelector(hrefAttribute); 
nextPage.classList.add("current");

        });
});

const button = document.querySelector(".bbm-bounce")

button.addEventListener("click", () => {
button.classList.toggle("bookmarkchange");
});

const answer = document.querySelector(".revealanswer");

const showMeAnswer = document.querySelector(".answer");

showMeAnswer.addEventListener("click", () => {
answer.classList.toggle("displayanswer");   
});

let question = {};

const myArray = [];

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
        question = {
        
        newQuestion: form.elements['new-question'].value,
        newAnswer: form.elements['new-answer'].value,
        newTags: form.elements['new-tags'].value

        }

myArray.push(question);
console.log(myArray);
console.log(question);
        event.preventDefault();
        document.querySelector('form').reset();
});



/* Alex sachen 

/ form stuff
let input = {};

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  input = {
    question: form.elements.newquestion.value,
    answer: form.elements.newanswer.value,
    questiontags: form.elements.newquestiontags.value
  };
  event.preventDefault();
  form.reset();
});

*/