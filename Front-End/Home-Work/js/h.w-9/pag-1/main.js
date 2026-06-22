let grades = [];

for (let i = 0; i < 6; i++) {
    let input = prompt(`الرجاء إدخال العلامة رقم ${i + 1}:`);
    grades.push(Number(input));
}

const container = document.getElementById('results-container');

let totalSum = 0; 

grades.forEach((grade, index) => {
    
    totalSum += grade; 
    
    let resultDiv = document.createElement('div');
    resultDiv.classList.add('result-card');
    
    if (grade >= 60) {
        resultDiv.textContent = `الطالب ورقم العلامة المدخلة ${index + 1}: ناجح (العلامة: ${grade})`;
        resultDiv.classList.add('success');
    } else {
        resultDiv.textContent = `الطالب ورقم العلامة المدخلة ${index + 1}: راسب (العلامة: ${grade})`;
        resultDiv.classList.add('fail'); 
    }
    
    container.appendChild(resultDiv);
});

let average = totalSum / grades.length;

let averageDiv = document.createElement('h3');
averageDiv.style.marginTop = "25px";
averageDiv.style.padding = "10px";
averageDiv.style.borderTop = "2px dashed #ccc";

averageDiv.textContent = `متوسط علامات الطلاب هو: ${average.toFixed(2)}`;

container.appendChild(averageDiv);