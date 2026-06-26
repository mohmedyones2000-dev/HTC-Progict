// FORM ELEMENTS
const usernameInput = document.getElementById('username');
const userageInput = document.getElementById('userage');
const useremailInput = document.getElementById('useremail');
const form = document.querySelector('form');
const submitBtn = document.getElementById('submitBtn');
const userTableBody = document.getElementById('userTableBody');
const emptyMessage = document.getElementById('emptyMessage');

// TRANSLATION & TEXT ELEMENTS 
const mainTitle = document.getElementById('mainTitle');
const mainSubtitle = document.getElementById('mainSubtitle');
const lblUsername = document.getElementById('lblUsername');
const lblUserage = document.getElementById('lblUserage');
const lblUseremail = document.getElementById('lblUseremail');
const tableTitle = document.getElementById('tableTitle');
const tableSubtitle = document.getElementById('tableSubtitle');
const thName = document.getElementById('thName');
const thEmail = document.getElementById('thEmail');
const thAge = document.getElementById('thAge');
const thActions = document.getElementById('thActions');
const langBtn = document.getElementById('langBtn');
const themeBtn = document.getElementById('themeBtn');

// CARDS & THEME CONTROL ELEMENTS
const bodyBg = document.getElementById('bodyBg');
const formCard = document.getElementById('formCard');
const tableCard = document.getElementById('tableCard');
const tableHeader = document.getElementById('tableHeader');
const mainTable = document.getElementById('mainTable');
const tableRowHeader = document.getElementById('tableRowHeader');
const controlBar = document.getElementById('controlBar');

// ERROR ELEMENTS
const usernameError = document.getElementById('usernameError');
const userageError = document.getElementById('userageError');
const useremailError = document.getElementById('useremailError');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

let usersList = JSON.parse(localStorage.getItem('users')) || [];
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';

let isEditMode = false;
let editIndex = null;

const nameRegex = /^[a-zA-Z\s\u0600-\u06FF]+$/;
const emailRegex = /^[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

const blueBtnClasses = ['from-[#00b4d8]', 'to-[#0077b6]', 'hover:from-[#00c4e8]', 'hover:to-[#0088cc]', 'shadow-cyan-500/10', 'hover:shadow-cyan-500/30'];
const yellowBtnClasses = ['from-amber-400', 'to-yellow-500', 'hover:from-amber-300', 'hover:to-yellow-400', 'shadow-yellow-500/10', 'hover:shadow-yellow-500/30'];

const translation = {
    en: {
        langBtnText: 'العربية',
        themeLight: '☀️ Light Mode',
        themeDark: '🌙 Dark Mode',
        mainTitle: 'User Management',
        mainSubtitle: 'Enter registered info with continuous validation.',
        lblUsername: 'User Name',
        lblUserage: 'User Age',
        lblUseremail: 'User Email',
        phUsername: 'Enter user name',
        phUserage: 'Enter user age',
        phUseremail: 'Enter user email',
        btnCreate: 'Create User',
        btnUpdate: 'Update User',
        tableTitle: 'Active Users',
        tableSubtitle: 'Review and manage all currently registered users.',
        thName: 'User Name',
        thEmail: 'User Email',
        thAge: 'User Age',
        thActions: 'Actions',
        emptyMsg: 'No users created yet. Fill the form to add someone.',
        errNameReq: 'Username is required.',
        errNameLen: 'Name must be at least 3 characters.',
        errNameInv: 'Name must contain letters only (No numbers or symbols).',
        errAgeReq: 'Age is required.',
        errAgeInv: 'Age must be between 1 and 120.',
        errEmailReq: 'Email is required.',
        errEmailInv: 'Please enter a valid Google-standard email.',
        confirmDel: 'Are you sure you want to delete this user?',
        toastAdd: 'New user created successfully! 🎉',
        toastUpd: 'User data updated successfully! ✏️',
        toastDel: 'User deleted successfully! 🗑️'
    },
    ar: {
        langBtnText: 'English',
        themeLight: ' الوضع المضيء ☀️',
        themeDark: ' الوضع الليلي 🌙',
        mainTitle: 'إدارة المستخدمين',
        mainSubtitle: 'أدخل البيانات المسجلة مع فحص فوري ومستمر.',
        lblUsername: 'اسم المستخدم',
        lblUserage: 'العمر',
        lblUseremail: 'البريد الإلكتروني',
        phUsername: 'أدخل اسم المستخدم',
        phUserage: 'أدخل عمر المستخدم',
        phUseremail: 'أدخل البريد الإلكتروني',
        btnCreate: 'إنشاء مستخدم',
        btnUpdate: 'تحديث البيانات',
        tableTitle: 'المستخدمين النشطين',
        tableSubtitle: 'مراجعة والتحكم في جميع الأعضاء المسجلين حالياً.',
        thName: 'الاسم',
        thEmail: 'البريد الإلكتروني',
        thAge: 'العمر',
        thActions: 'العمليات',
        emptyMsg: 'لا يوجد مستخدمين مسجلين حتى الآن. املأ النموذج لإضافة عضو.',
        errNameReq: 'اسم المستخدم مطلوب.',
        errNameLen: 'يجب أن لا يقل الاسم عن 3 أحرف.',
        errNameInv: 'يجب أن يحتوي الاسم على حروف فقط (بدون أرقام أو رموز).',
        errAgeReq: 'العمر مطلوب.',
        errAgeInv: 'يجب أن يكون العمر بين 1 و 120 سنة.',
        errEmailReq: 'البريد الإلكتروني مطلوب.',
        errEmailInv: 'يرجى إدخال بريد إلكتروني صحيح ومعتمد.',
        confirmDel: 'هل أنت متأكد من رغبتك في حذف هذا المستخدم؟',
        toastAdd: 'تم إضافة مستخدم جديد بنجاح! 🎉',
        toastUpd: 'تم تحديث البيانات بنجاح! ✏️',
        toastDel: 'تم حذف المستخدم بنجاح! 🗑️'
    }
};

applyLanguage();
applyTheme();
displayUsers();

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', currentLang);
    applyLanguage();
    applyTheme();
    displayUsers();
}

function applyLanguage() {
    const t = translation[currentLang];
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    langBtn.innerText = t.langBtnText;
    
    mainTitle.innerText = t.mainTitle;
    mainSubtitle.innerText = t.mainSubtitle;
    lblUsername.innerText = t.lblUsername;
    lblUserage.innerText = t.lblUserage;
    lblUseremail.innerText = t.lblUseremail;
    
    usernameInput.placeholder = t.phUsername;
    userageInput.placeholder = t.phUserage;
    useremailInput.placeholder = t.phUseremail;
    
    submitBtn.innerText = isEditMode ? t.btnUpdate : t.btnCreate;
    
    tableTitle.innerText = t.tableTitle;
    tableSubtitle.innerText = t.tableSubtitle;
    thName.innerText = t.thName;
    if (thEmail) thEmail.innerText = t.thEmail;
    thAge.innerText = t.thAge;
    thActions.innerText = t.thActions;
    emptyMessage.innerText = t.emptyMsg;

    mainTable.className = currentLang === 'ar' ? 'w-full text-right border-collapse' : 'w-full text-left border-collapse';
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme();
}

function applyTheme() {
    const t = translation[currentLang];

    if (currentTheme === 'light') {
        themeBtn.innerText = t.themeDark;
        themeBtn.className = "text-xs bg-slate-200 hover:bg-slate-300 text-slate-800 px-3 py-1.5 rounded-lg border border-slate-300 font-bold transition-all duration-200";
        
        bodyBg.className = "bg-slate-50 bg-gradient-to-tr from-slate-100 via-white to-slate-100 min-h-screen flex items-center justify-center p-4 md:p-8 text-slate-800 font-sans relative transition-all duration-300";
        formCard.className = "lg:col-span-2 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200 sticky top-8 transition-all duration-300";
        tableCard.className = "lg:col-span-3 bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xl shadow-slate-200 transition-all duration-300";
        tableHeader.className = "p-6 border-b border-slate-100 bg-slate-50/50";
        tableRowHeader.className = "text-[11px] uppercase tracking-widest text-cyan-600 font-bold bg-slate-100/70";
        controlBar.className = "flex items-center justify-end gap-3 mb-6 border-b border-slate-100 pb-4";
        
        mainTitle.classList.replace('from-white', 'from-slate-800');
        usernameInput.className = "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200";
        userageInput.className = "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200";
        useremailInput.className = "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200";
    } else {
        themeBtn.innerText = t.themeLight;
        themeBtn.className = "text-xs bg-purple-500/10 hover:bg-purple-500 text-purple-400 hover:text-white px-3 py-1.5 rounded-lg border border-purple-500/20 font-bold transition-all duration-200";
        
        bodyBg.className = "bg-[#050714] bg-gradient-to-tr from-[#050714] via-[#090d26] to-[#050714] min-h-screen flex items-center justify-center p-4 md:p-8 text-white font-sans relative transition-all duration-300";
        formCard.className = "lg:col-span-2 bg-[#0f1123]/80 backdrop-blur-md border border-[#1e2238] rounded-2xl p-6 md:p-8 shadow-2xl shadow-cyan-950/30 sticky top-8 transition-all duration-300";
        tableCard.className = "lg:col-span-3 bg-[#0f1123]/50 backdrop-blur-md border border-[#1e2238] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 transition-all duration-300";
        tableHeader.className = "p-6 border-b border-[#1e2238] bg-[#12152a]/40";
        tableRowHeader.className = "text-[11px] uppercase tracking-widest text-cyan-400 font-bold bg-[#141731]/60";
        controlBar.className = "flex items-center justify-end gap-3 mb-6 border-b border-[#1e2238]/60 pb-4";
        
        mainTitle.classList.replace('from-slate-800', 'from-white');
        usernameInput.className = "w-full bg-[#141730] border border-[#222746] rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200";
        userageInput.className = "w-full bg-[#141730] border border-[#222746] rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200";
        useremailInput.className = "w-full bg-[#141730] border border-[#222746] rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200";
    }
}

usernameInput.addEventListener('input', validateUsername);
userageInput.addEventListener('input', validateUserage);
useremailInput.addEventListener('input', validateUseremail);

function validateUsername() {
    const value = usernameInput.value.trim();
    const t = translation[currentLang];
    if (value === '') {
        showInputError(usernameInput, usernameError, t.errNameReq);
        return false;
    } else if (value.length < 3) {
        showInputError(usernameInput, usernameError, t.errNameLen);
        return false;
    } else if (!nameRegex.test(value)) {
        showInputError(usernameInput, usernameError, t.errNameInv);
        return false;
    } else {
        hideInputError(usernameInput, usernameError);
        return true;
    }
}

function validateUserage() {
    const value = userageInput.value.trim();
    const t = translation[currentLang];
    if (value === '') {
        showInputError(userageInput, userageError, t.errAgeReq);
        return false;
    } 
    const age = parseInt(value);
    if (isNaN(age) || age < 1 || age > 120) {
        showInputError(userageInput, userageError, t.errAgeInv);
        return false;
    } else {
        hideInputError(userageInput, userageError);
        return true;
    }
}

function validateUseremail() {
    const value = useremailInput.value.trim();
    const t = translation[currentLang];
    if (value === '') {
        showInputError(useremailInput, useremailError, t.errEmailReq);
        return false;
    } else if (!emailRegex.test(value)) {
        showInputError(useremailInput, useremailError, t.errEmailInv);
        return false;
    } else {
        hideInputError(useremailInput, useremailError);
        return true;
    }
}

function showInputError(inputEl, errorEl, message) {
    errorEl.innerText = message;
    errorEl.classList.remove('hidden');
    inputEl.classList.add('border-red-500', 'focus:border-red-500');
}

function hideInputError(inputEl, errorEl) {
    errorEl.classList.add('hidden');
    inputEl.classList.remove('border-red-500', 'focus:border-red-500');
}

usernameInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (validateUsername()) {
            userageInput.focus();
        }
    }
});

userageInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (validateUserage()) {
            useremailInput.focus();
        }
    }
});

useremailInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();

        if (validateUsername() && validateUserage() && validateUseremail()) {
            handleFormSubmit();
        }
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!validateUsername() || !validateUserage() || !validateUseremail()) return;
    handleFormSubmit();
});

function handleFormSubmit() {
    const t = translation[currentLang];
    const userData = {
        name: usernameInput.value.trim(),
        age: userageInput.value.trim(),
        email: useremailInput.value.trim().toLowerCase()
    };

    if (isEditMode) {
        usersList[editIndex] = userData;
        isEditMode = false;
        editIndex = null;
        
        submitBtn.innerText = t.btnCreate;
        submitBtn.classList.remove(...yellowBtnClasses);
        submitBtn.classList.add(...blueBtnClasses);
        
        showToast(t.toastUpd, 'yellow');
    } else {
        usersList.push(userData);
        showToast(t.toastAdd, 'emerald');
    }

    localStorage.setItem('users', JSON.stringify(usersList));
    displayUsers();
    clearForm();
    usernameInput.focus();
}

function displayUsers() {
    userTableBody.innerHTML = '';

    if (usersList.length === 0) {
        emptyMessage.classList.remove('hidden');
    } else {
        emptyMessage.classList.add('hidden');
    }

    usersList.forEach((user, index) => {
        const tr = document.createElement('tr');
        tr.className = currentTheme === 'light' 
            ? "text-sm text-slate-600 hover:bg-slate-50 transition-colors duration-150 border-b border-slate-100"
            : "text-sm text-gray-300 hover:bg-[#141730]/40 transition-colors duration-150";
        
        tr.innerHTML = `
            <td class="py-4 px-5 text-center text-gray-500 font-semibold">${index + 1}</td>
            <td class="py-4 px-5 font-medium ${currentTheme === 'light' ? 'text-slate-800' : 'text-white'}">${user.name}</td>
            <td class="py-4 px-5 ${currentTheme === 'light' ? 'text-slate-500' : 'text-gray-400'}">${user.email}</td>
            <td class="py-4 px-5">${user.age}</td>
            <td class="py-4 px-5 text-center flex items-center justify-center gap-2">
                <button onclick="startEdit(${index})" 
                        class="text-xs bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-[#050714] font-bold px-3 py-1.5 rounded-lg border border-amber-500/20 transition-all duration-200">
                    ${currentLang === 'ar' ? 'تعديل' : 'Edit'}
                </button>
                <button onclick="deleteUser(${index})" 
                        class="text-xs bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-3 py-1.5 rounded-lg border border-red-500/20 transition-all duration-200">
                    ${currentLang === 'ar' ? 'حذف' : 'Delete'}
                </button>
            </td>
        `;
        userTableBody.appendChild(tr);
    });
}

function startEdit(index) {
    const selectedUser = usersList[index];
    const t = translation[currentLang];
    
    usernameInput.value = selectedUser.name;
    userageInput.value = selectedUser.age;
    useremailInput.value = selectedUser.email;

    isEditMode = true;
    editIndex = index;
    
    submitBtn.innerText = t.btnUpdate;
    submitBtn.classList.remove(...blueBtnClasses);
    submitBtn.classList.add(...yellowBtnClasses);
    
    clearErrors();
    usernameInput.focus();
}

function deleteUser(index) {
    const t = translation[currentLang];
    const confirmDelete = confirm(t.confirmDel);
    
    if (confirmDelete) {
        usersList.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(usersList));
        displayUsers();
        showToast(t.toastDel, 'red');
        
        if (isEditMode && editIndex === index) {
            isEditMode = false;
            submitBtn.innerText = t.btnCreate;
            submitBtn.classList.remove(...yellowBtnClasses);
            submitBtn.classList.add(...blueBtnClasses);
            clearForm();
        }
    }
}

function showToast(message, color) {
    toastMessage.innerText = message;
    toast.classList.remove('bg-emerald-500', 'bg-amber-400', 'bg-red-500', 'shadow-emerald-500/20', 'shadow-yellow-500/20', 'shadow-red-500/20');
    
    if (color === 'emerald') toast.classList.add('bg-emerald-500', 'shadow-emerald-500/20');
    if (color === 'yellow') toast.classList.add('bg-amber-400', 'shadow-yellow-500/20');
    if (color === 'red') toast.classList.add('bg-red-500', 'shadow-red-500/20');

    toast.classList.remove('translate-x-72', 'opacity-0');
    toast.classList.add('translate-x-0', 'opacity-100');

    setTimeout(() => {
        toast.classList.remove('translate-x-0', 'opacity-100');
        toast.classList.add('translate-x-72', 'opacity-0');
    }, 3000);
}

function clearForm() {
    usernameInput.value = '';
    userageInput.value = '';
    useremailInput.value = '';
    clearErrors();
}

function clearErrors() {
    hideInputError(usernameInput, usernameError);
    hideInputError(userageInput, userageError);
    hideInputError(useremailInput, useremailError);
}