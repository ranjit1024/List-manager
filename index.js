const addForm = document.querySelector(".add");
const taskList = document.querySelector(".tasks");
addForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const value = addForm.addtask.value.trim();
    if(value.length){
        console.log(value);
        taskList.innerHTML += `<li class="task">
        <span>${addForm.addtask.value}</span>
        <i class="bi bi-trash delete"></i>
        </li>`
    }
    addForm.reset();
})