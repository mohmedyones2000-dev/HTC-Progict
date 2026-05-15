function circleArea(radius) {
    const PI = 3.14;
    return ((radius**2)*PI)
}
document.write("مساحة الدائرة = " + circleArea(prompt("أدخل نصف القطر")));
document.write("<br>"+"=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-="+"<br>");

function max(a,b,c){
    if(a>b && a>c){
        return a
    }else if(b>a && b>c){
        return b
    }else if(c>a && c>b){
        return c
    }else{
        return a + "=" + b + "=" + c 
    }
}
document.write(max(prompt("الرقم الأول = "),prompt("الرقم الثاني = "),prompt("الرقم الثالث =")));
document.write("<br>"+"=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-="+"<br>");

