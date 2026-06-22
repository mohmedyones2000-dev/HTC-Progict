const container = document.getElementById('tasks-container');
const addTaskBtn = document.getElementById('add-task-btn');
const clearAllBtn = document.getElementById('clear-all-btn');

let savedTasks = localStorage.getItem('userTasks');
let tasksArray = savedTasks ? JSON.parse(savedTasks) : [];

function saveToStorage() {
    localStorage.setItem('userTasks', JSON.stringify(tasksArray));
}

function moveTaskToLast(index, newStatus) {
    
    tasksArray[index].status = newStatus;
    
    const [movedTask] = tasksArray.splice(index, 1);
    
    tasksArray.push(movedTask);
    
    saveToStorage();
    renderTasks();
}

function renderTasks() {
    container.innerHTML = '';
    
    tasksArray.forEach((task, index) => {
        const taskCard = document.createElement('div');
        
        if (task.status === 'completed') taskCard.className = 'task-card completed';
        else if (task.status === 'failed') taskCard.className = 'task-card failed';
        else taskCard.className = 'task-card';

        let statusText = '(قيد الانتظار)';
        if (task.status === 'completed') statusText = ' - تم الانجاز';
        if (task.status === 'failed') statusText = ' - لم يتم الانجاز';

        const infoWrapper = document.createElement('div');
        infoWrapper.innerHTML = `
            <span class="task-title">${task.title}</span>
            <span class="task-status" id="status-${index}">${statusText}</span>
        `;

        const buttonsGroup = document.createElement('div');
        buttonsGroup.classList.add('buttons-group');

        const checkBtn = document.createElement('button');
        checkBtn.classList.add('btn-success');
        checkBtn.textContent = '✓';
        checkBtn.addEventListener('click', () => {
            
            moveTaskToLast(index, 'completed');
        });

        // زر الخطأ
        const crossBtn = document.createElement('button');
        crossBtn.classList.add('btn-danger');
        crossBtn.textContent = '✕';
        crossBtn.addEventListener('click', () => {
            
            moveTaskToLast(index, 'failed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn-delete');
        deleteBtn.innerHTML = '🗑️';
        deleteBtn.title = "حذف هذه المهمة";
        deleteBtn.addEventListener('click', () => {
            tasksArray.splice(index, 1);
            saveToStorage();
            renderTasks();
        });

        buttonsGroup.appendChild(checkBtn);
        buttonsGroup.appendChild(crossBtn);
        buttonsGroup.appendChild(deleteBtn);
        
        taskCard.appendChild(infoWrapper);
        taskCard.appendChild(buttonsGroup);
        
        container.appendChild(taskCard);
    });
}

if (tasksArray.length > 0) {
    renderTasks();
} else {
    let taskCount = prompt("لا يوجد مهام مخزنة، كم عدد المهام التي تود إضافتها اليوم؟") || 0;
    for (let i = 0; i < Number(taskCount); i++) {
        let title = prompt(`أدخل عنوان المهمة رقم ${i + 1}:`);
        if (title && title.trim() !== "") {
            tasksArray.push({ title: title.trim(), status: 'pending' });
        }
    }
    saveToStorage();
    renderTasks();
}

addTaskBtn.addEventListener('click', () => {
    let newTitle = prompt("أدخل عنوان المهمة الجديدة:");
    if (newTitle && newTitle.trim() !== "") {
        tasksArray.push({
            title: newTitle.trim(),
            status: 'pending'
        });
        saveToStorage();
        renderTasks();
    }
});

clearAllBtn.addEventListener('click', () => {
    if (confirm("هل أنت متأكد من رغبتك في حذف جميع المهام؟")) {
        tasksArray = [];
        saveToStorage();
        renderTasks();
    }
});