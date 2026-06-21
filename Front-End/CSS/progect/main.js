const nextBtn = document.querySelectorAll(".heroAction .next");
const prevBtn = document.querySelectorAll(".heroAction .prev");
const images = document.querySelectorAll(".heroImg img");
let currentIndex = 0;
nextBtn.onclick = _ => {
hiddenImage();
if(currentIndex >= images.length){
    currentIndex = 0;
}else{
    currentIndex++;
}
images[currentIndex].classList.add("active");
}
function hiddenImage() {
    if(images[currentIndex].classList.contains("active")){
            images[currentIndex].classList.remove("active");
    }
}