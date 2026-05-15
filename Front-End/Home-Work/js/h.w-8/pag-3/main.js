let nameInp = document.querySelector('.name');
let ageInp = document.querySelector('.age');
let hobbyInp = document.querySelector('.hobby');
let btnEl = document.querySelector('button');
let hiddenEl = document.querySelector('.hidden');

btnEl.onclick = _ =>{
    // let show = hiddenEl.style.display = "block";
    let name = nameInp.value;
    let age = ageInp.value;
    let hobby = hobbyInp.value;
    if(name && age && hobby){
        hiddenEl.style.display = "block";
        hiddenEl.innerHTML = " الاسم = " + name +"<br>"+ "العمر = "+ age + "<br>" + "الهواية المفضلة = " + hobby;
    }
}