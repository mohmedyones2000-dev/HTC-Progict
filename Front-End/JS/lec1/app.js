const nameEl = document.querySelector("#name");
const salaryEl = document.querySelector("#salary");
const btnEl = document.querySelector("button");
const secPrintEl = document.querySelector(".print");

btnEl.onclick = _ =>{
    console.log(secPrintEl);
    
    
    let grad = +salaryEl.value;
    let text = nameEl.value;
   
    if(grad && text){
        if(grad > 0){
                if(grad <= 1000){
                    secPrintEl.innerHTML = " اسم الموظف :" + text +"<br>"+ "الراتب : "+ grad;
                    secPrintEl.style.display = "block";
                    secPrintEl.style.background = "lightcoral";
                    secPrintEl.style.color = "#ff00008d";
                    secPrintEl.style.border = "#ff00008d solid 2px";
                }else if(grad <= 2000){
                    secPrintEl.innerHTML = " اسم الموظف :" + text +"<br>"+ "الراتب : "+ grad;
                    secPrintEl.style.display = "block";
                    secPrintEl.style.background = "#ead068fd";
                    secPrintEl.style.color = "#ffff00cb";
                    secPrintEl.style.border = "#ffff00cb solid 2px";
                }else if (grad > 2000){
                    secPrintEl.innerHTML = " اسم الموظف :" + text +"<br>"+ "الراتب : "+ grad;
                    secPrintEl.style.display = "block";
                    secPrintEl.style.background = "lightgreen";
                    secPrintEl.style.color = "#0080009e";
                    secPrintEl.style.border = "#0080009e solid 2px";
                }
        }else{
                secPrintEl.innerHTML = "أدخل الراتب بشكل صحيح";
                secPrintEl.style.display = "block";
                secPrintEl.style.background = "lightcoral";
                secPrintEl.style.color = "#ff00008d";
                secPrintEl.style.border = "#ff00008d solid 2px";
            }
    }else{
        secPrintEl.innerHTML = "أدخل اسم الموظف أوالراتب";
        secPrintEl.style.display = "block";
        secPrintEl.style.background = "lightcoral";
        secPrintEl.style.color = "#ff00008d";
        secPrintEl.style.border = "#ff00008d solid 2px";     
    }
}