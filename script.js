const linkmain = document.querySelector(".link-main");
const linksave = document.querySelector(".link-save");
const linkadd = document.querySelector(".link-add");
const linkprofile = document.querySelector(".link-profile");

const pagehome = document.querySelector("#home");
const pagebookmarked = document.querySelector("#bookmark-page");
const pagecreate = document.querySelector("#create-page");
const pageprofile = document.querySelector("#profile-page");

const pages = document.querySelectorAll(".page")

linkmain.addEventListener("click", () => {
    pages.forEach((page) => {
    page.classList.remove("current");
    });
    pagehome.classList.add("current");
});

linksave.addEventListener("click", () => {
    pages.forEach((page) => {
        page.classList.remove("current");
        });
    pagebookmarked.classList.add("current"); 
});

linkadd.addEventListener("click", () => {
    pages.forEach((page) => {
        page.classList.remove("current");
        });
    pagecreate.classList.add("current");
});

linkprofile.addEventListener("click", () => {
    pages.forEach((page) => {
        page.classList.remove("current");
        });
    pageprofile.classList.add("current");
});