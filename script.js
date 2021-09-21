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