let price = prompt("أدخل المبلغ الأول");
let quantity = prompt("أدخل المبلغ الثاني");
let sum = (price + quantity);
let totalSum = (sum * 1.15);
document.write("مجموع السعر " + sum + "<br>" + "<br>");
document.write("مجموع السعر شامل الضريبة " + totalSum);