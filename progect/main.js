const goUpEl = document.querySelector(".goUp");
const headerEl = document.querySelector("header");
const menuBtn = document.querySelector(".menuBtn");
const menuList = document.querySelector(".menuListSm");

// show/hide mune sm
menuBtn.onclick = _ => {
    menuList.classList.toggle('show')
}

// ------ when scroll in the page 
//  1- add effect header  
//  2- show /hide up btn
//  -----------------------------
onscroll = _ => {
    if (scrollY > 200) {
        goUpEl.classList.add('show');
        headerEl.classList.add("scroll");

    } else {
        goUpEl.classList.remove('show');
        headerEl.classList.remove("scroll");
    }
}

// ------------  slide show for main section
const nextBtn = document.querySelector("main .next")
const prevBtn = document.querySelector("main .prev")
const imgAll = document.querySelectorAll('main img')

let indexImg = 0

nextBtn.onclick = _ => {
    removeClassShow()
    if (indexImg == imgAll.length - 1) {
        indexImg = 0
    } else {
        indexImg++
    }
    imgAll[indexImg].classList.add("show")
}

prevBtn.onclick = _ => {
    removeClassShow()
    if (indexImg == 0) {
        indexImg = imgAll.length - 1
    } else {
        indexImg--
    }
    imgAll[indexImg].classList.add("show")
}

function removeClassShow() {
    imgAll.forEach(img => img.classList.remove("show"))
}

window.setInterval(_ => {
    removeClassShow()
    if (indexImg == imgAll.length - 1) {
        indexImg = 0
    } else {
        indexImg++
    }
    imgAll[indexImg].classList.add("show")
}, 3000)

// concat for validition 
const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", event => {
    event.preventDefault();

    const fnameInp = document.querySelector("#fname");
    const fnameMsg = document.querySelector("#fnameError");
    const fanme = fnameInp.value.trim()
    if (!fanme) {
        fnameError.textContent = "يرجى ملى الحقل";
        fnameError.classList.add('show')
    } else if (fanme.length < 2) {
        fnameError.textContent = "كتابة اسم صحيح اكر من حرف ";
        fnameError.classList.add('show')
    } else {
        fnameError.textContent = "";
        fnameError.classList.remove('show')
    }
})


document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", _ => {
        const errorMsg = document.querySelector(`#${input.id}Error`);
        if (errorMsg) {
            errorMsg.textContent = "";
            errorMsg.classList.remove('show')
        }
    }
    )
}
)