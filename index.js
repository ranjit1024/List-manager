const addForm = document.querySelector(".add");
const taskList = document.querySelector(".tasks");
const clearAll = document.querySelector(".clearall");
const messageSpan = document.querySelector(".message span");
const searchForm = document.querySelector("#search");


function updateTask(){
    const allListItems = document.querySelectorAll("li");
    console.log(allListItems.length);
    messageSpan.innerText = `you have ${allListItems.length} pending tasks.`
}
updateTask();

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
    updateTask();
});

taskList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
    updateTask();
});

clearAll.addEventListener("click",(e)=>{
    const listItem = document.querySelectorAll("li");
    listItem.forEach((item)=>{
        item.remove();
    });
    updateTask();
})

function filterTask(term){
    const tasklistValues = Array.from(taskList.children)
    .filter(task => {
        return !task.textContent.includes(term);
    })
    .forEach(element => {
        element.classList.add("hide");
    })

    Array.from(taskList.children).
    filter(task => {
        return task.textContent.includes(term);
    }).forEach(elemet => {
        elemet.classList.remove("hide");
    })
}


searchForm.task.addEventListener("keyup", (e)=>{
    const serchValue = searchForm.task.value.trim();
    filterTask(serchValue);
});

