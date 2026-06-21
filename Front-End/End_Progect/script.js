const headerEl = document.querySelector("header");
const upBtnEl = document.querySelector(".up-btn");

onscroll = _ => {
    if (scrollY > 100) {
        headerEl.classList.add("scroll");
        upBtnEl.classList.add("show");
    } else {
        headerEl.classList.remove("scroll");
        upBtnEl.classList.remove("show");
    }
}
// upBtnEl.onclick = _ => scrollTo(0 , 0);
upBtnEl.onclick = _ => scrollBy(0 , -700);