const add = document.getElementById('addTaskBtn');
const modal_container = document.getElementById('modal_container');
const closeBtn = document.getElementById("closeBtn");
const close = document.getElementById("close");

add.addEventListener('click', () => {
    
    modal_container.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    modal_container.classList.remove('show');
});


close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

