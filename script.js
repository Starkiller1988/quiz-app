const linkmain = document.querySelector(".link-main");
const linksave = document.querySelector(".link-save");
const linkadd = document.querySelector(".link-add");
const linkprofile = document.querySelector(".link-profile");

const pagehome = document.querySelector("#home");
const pagebookmarked = document.querySelector("#bookmark-page");
const pagecreate = document.querySelector("#create-page");
const pageprofile = document.querySelector("#profile-page");

const pages = document.querySelectorAll(".page")

const links = document.querySelectorAll("footer a")

links.forEach(link) => {
    link.addEventListener("click", () => {
        pages.forEach((page) => {
        page.classList.remove("current");

const hrefAttribute = links.getAttribute("href");
hrefAttribute.classList.add("current");

        });
