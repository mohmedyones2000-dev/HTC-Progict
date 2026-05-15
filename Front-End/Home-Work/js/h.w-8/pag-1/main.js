let heightInp = document.querySelector('.height');
let widthInp = document.querySelector('.width');
let btnEl = document.querySelector('button');
let hiddenEl = document.querySelector('.hidden');

btnEl.onclick = _ =>{
    // let show = hiddenEl.style.display = "block";
    let height = +heightInp.value;
    let width = +widthInp.value;
    let area = (height*width);
    if(height && width){
        hiddenEl.style.display = "block";
        hiddenEl.innerHTML = " الطول = " + height +"<br>"+ "العرض = "+ width + "<br>" + "المساحة = " + area;
    }
}