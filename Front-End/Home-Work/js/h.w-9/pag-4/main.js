// ================================================================================================
// التمرين الرابع: تحدي "المبرمج النظيف" (إدخال ديناميكي)
// ================================================================================================
const messyNames = [];

for (let i = 0; i < 4; i++) {
    let input = prompt(`الرجاء إدخال الاسم رقم ${i + 1} (اكتبه بفراغات أو أحرف عشوائية لتحدي الكود):`);
    
    if (input) {
        messyNames.push(input);
    }
}

const cleanNames = messyNames
    .map(name => name.trim().toLowerCase()) 
    .map(name => name.charAt(0).toUpperCase() + name.slice(1)) 
    .sort();
    
document.getElementById('ex4-results').innerHTML = `
    <strong>الأسماء المدخلة (قبل التنظيف):</strong> [${messyNames.join(', ')}]<br>
    <strong>الأسماء بعد التنظيف والترتيب أبجدياً:</strong> [${cleanNames.join(', ')}]
`;