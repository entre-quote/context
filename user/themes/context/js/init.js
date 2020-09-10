
const mobileTrigger = document.querySelector(".mobile-nav-trigger");

mobileTrigger.addEventListener("click", e => {
    e.preventDefault();
    const body = document.querySelector("body");
    const mainNav = document.querySelector(".main-nav");

    body.classList.toggle("menu-is-fixed");
    mainNav.classList.toggle("is-displayed");
})