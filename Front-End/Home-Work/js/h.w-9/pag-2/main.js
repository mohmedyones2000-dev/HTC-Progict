// ================================================================================================
// التمرين الثاني: منسق الأسعار (إدخال ديناميكي)
// ================================================================================================
const oldPrices = [];

for (let i = 0; i < 4; i++) {
    let input = prompt(`الرجاء إدخال سعر المنتج رقم ${i + 1} بالدولار:`);
    
    oldPrices.push(Number(input));
}

const newPrices = oldPrices.map(price => price * 1.15);

const ex2Container = document.getElementById('ex2-results');

oldPrices.forEach((oldPrice, index) => {
    const priceDiv = document.createElement('div');
    priceDiv.style.margin = "8px 0";
    
    priceDiv.innerHTML = `
        السعر القديم: <span class="old-price">${oldPrice}$</span> 
        | السعر الجديد بعد الضريبة: <span class="new-price">${newPrices[index].toFixed(2)}$</span>
    `;
    ex2Container.appendChild(priceDiv);
});