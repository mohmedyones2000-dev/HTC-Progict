// ================================================================================================
// التمرين السادس: تحدي "بيانات الطلاب" (مستوى متقدم)
// ================================================================================================
const students = [ 
    { id: 1, name: "أحمد", track: "برمجة الويب", score: 85 }, 
    { id: 2, name: "سارة", track: "التصميم الجرافيكي", score: 92 }, 
    { id: 3, name: "علي", track: "برمجة الويب", score: 40 }, 
    { id: 4, name: "ليلى", track: "صيانة الهواتف", score: 78 } 
];

const passingWebStudents = students.filter(student => student.score >= 50 && student.track === "برمجة الويب");

const studentId2 = students.find(student => student.id === 2);

const creativeStudents = students.map(student => `${student.name} مبدع/ة`);

const totalScores = students.reduce((sum, student) => sum + student.score, 0);

const studentsAverage = totalScores / students.length;

document.getElementById('ex6-results').innerHTML = `
    <strong>الطلاب الناجحين في مسار برمجة الويب:</strong> ${passingWebStudents.map(s => s.name).join(', ')}<br>
    <strong>الطالب صاحب المعرف (id: 2):</strong> ${studentId2 ? studentId2.name : 'غير موجود'}<br>
    <strong>مصفوفة المبدعين:</strong> [${creativeStudents.join(' | ')}]<br>
    <strong>مجموع درجات الطلاب الكلي:</strong> ${totalScores}<br>
    <strong>متوسط درجات جميع الطلاب:</strong> ${studentsAverage.toFixed(2)}
`;