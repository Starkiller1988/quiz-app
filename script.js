const linkmain = document.querySelector(".link-main");
const linksave = document.querySelector(".link-save");
const linkadd = document.querySelector(".link-add");
const linkprofile = document.querySelector(".link-profile");

const pagehome = document.querySelector("#home");
const pagebookmarked = document.querySelector("#bookmark-page");
const pagecreate = document.querySelector("#create-page");
const pageprofile = document.querySelector("#profile-page");

linkmain.addEventListener("click", () => {
    pagehome.classList.add("current");
    pagebookmarked.classList.remove("current");
    pagecreate.classList.remove("current");
    pageprofile.classList.remove("current");
});

linksave.addEventListener("click", () => {
    pagehome.classList.remove("current");
    pagebookmarked.classList.add("current");
    pagecreate.classList.remove("current");
    pageprofile.classList.remove("current");
});

linkadd.addEventListener("click", () => {
    pagehome.classList.remove("current");
    pagebookmarked.classList.remove("current");
    pagecreate.classList.add("current");
    pageprofile.classList.remove("current");
});

linkprofile.addEventListener("click", () => {
    pagehome.classList.remove("current");
    pagebookmarked.classList.remove("current");
    pagecreate.classList.remove("current");
    pageprofile.classList.add("current");
});