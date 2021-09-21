const linkhaupt = document.querySelector(".link-haupt");
const linkspeichern = document.querySelector(".link-speichern");
const linkeinfügen = document.querySelector(".link-einfügen");
const linkprofil = document.querySelector(".link-profil");

const pagehome = document.querySelector("#home");
const pagebookmarked = document.querySelector("#bookmark");
const pagecreate = document.querySelector("#create");
const pageprofile = document.querySelector("#profile");

linkhaupt.addEventListener("click", () => {
    pagehome.classList.add("current");
    pagebookmarked.classList.remove("current");
    pagecreate.classList.remove("current");
    pageprofile.classList.remove("current");
});

linkspeichern.addEventListener("click", () => {
    pagehome.classList.remove("current");
    pagebookmarked.classList.add("current");
    pagecreate.classList.remove("current");
    pageprofile.classList.remove("current");
});

linkeinfügen.addEventListener("click", () => {
    pagehome.classList.remove("current");
    pagebookmarked.classList.remove("current");
    pagecreate.classList.add("current");
    pageprofile.classList.remove("current");
});

linkprofil.addEventListener("click", () => {
    pagehome.classList.remove("current");
    pagebookmarked.classList.remove("current");
    pagecreate.classList.remove("current");
    pageprofile.classList.add("current");
})