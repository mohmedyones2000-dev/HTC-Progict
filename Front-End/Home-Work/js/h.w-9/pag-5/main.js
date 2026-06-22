// ================================================================================================
// التمرين الخامس: المخرجات والمصفوفات (دبلومات مركز الهمص)
// ================================================================================================
let diplomas = ["دبلوم البرمجة", "دبلوم التصميم الجرافيكي", "دبلوم التسويق الرقمي"];

diplomas.unshift("دبلوم الذكاء الاصطناعي");

let deletedDiploma = diplomas.pop();

alert(`تم حذف آخر دبلوم من القائمة وهو: ${deletedDiploma}`);

const hasProgramming = diplomas.includes("دبلوم البرمجة");

const ex5Section = document.getElementById('ex5-results');
ex5Section.innerHTML = `
    <strong>قائمة الدبلومات الحالية:</strong> [${diplomas.join(', ')}]<br>
    <strong>هل "دبلوم البرمجة" موجود في القائمة؟</strong> ${hasProgramming ? "نعم، موجود" : "لا، غير موجود"}
`;