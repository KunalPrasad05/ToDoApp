document.addEventListener('DOMContentLoaded', () => {
    const state = {
        tasks: []
    };

    const input = document.querySelector(".input-box");
    const button = document.querySelector(".btn");
    const list = document.querySelector("#taskList");
    const count = document.querySelector("#count");

    function updateButtonState() {
        const value = input.value.trim();
        button.disabled = value === "" || state.tasks.some(task => task.name === value);
    }

    input.addEventListener("input", updateButtonState);
    updateButtonState(); // Initial check

    button.addEventListener("click", function () {
        const value = input.value.trim();

        if (value === "" || state.tasks.some(task => task.name === value)) {
            return;
        }

        state.tasks.push({ name: value, done: false });
        input.value = "";
        updateButtonState();
        renderTasks();
    });

    input.addEventListener("keydown", function (evt) {
        if (evt.key === "Enter") {
            button.click();
        }
    });

    function renderTasks() {
        list.innerHTML = "";
        count.textContent = state.tasks.length;

        state.tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task.name;

            if (task.done) {
                li.style.textDecoration = "line-through";
            }

            const delBtn = document.createElement("button");
            delBtn.textContent = "Remove";
            delBtn.style.backgroundColor = "rgb(233, 216, 172)";
            delBtn.dataset.index = index;

            li.appendChild(delBtn);
            list.appendChild(li);
        });
    }

    // Event delegation for task actions
    list.addEventListener("click", function (e) {
        const target = e.target;

        if (target.tagName === "LI") {
            const index = Array.from(list.children).indexOf(target);
            state.tasks[index].done = !state.tasks[index].done;
            renderTasks();
        } else if (target.tagName === "BUTTON" && target.textContent === "Remove") {
            const index = parseInt(target.dataset.index);
            state.tasks.splice(index, 1);
            renderTasks();
        }
    });
});































// let tasks = [
//     { name: "HW", done: true },
//     { name: "Exercise", done: true },
//     { name: "JS 1", done: true },
//     { name: "Java", done: false },
// ];

// let allDone = false;

// for (let task of tasks) {
//     task.done !== allDone ? allDone = true: allDone;
// }
// console.log("All Done: ",allDone);


//----------------->FACTORIAL
// let n = 5;
// let fact = 1;
// for(let i=1; i<=n; i++){
//     fact = fact*i;
// }
// console.log(fact);
// const input = document.getElementById("task");
// const addBtn = document.getElementById("addtask");
// const list = document.getElementById("taskList");

// let tasks = [];

// addBtn.addEventListener("click", () => {
//     const taskText = input.value.trim();
//     if (taskText === "") return;

//     tasks.push(taskText);
//     input.value = "";

//     renderTask();
// });

// function renderTask() {
//     list.innerHTML = "";

//     tasks.forEach((task, index) => {
//         const li = document.createElement("li");

//         const span = document.createElement("span");
//         span.innerText = task;

//         const delBtn = document.createElement("button");
//         delBtn.innerText = "Delete";

//         delBtn.addEventListener("click", () => {
//             tasks.splice(index, 1);
//             renderTask();

//         });
//         li.appendChild(span);
//         li.appendChild(delBtn);
//         list.appendChild(li);

//     });
// }
// const increase = document.getElementById("inc");
// const descrease = document.getElementById("decr");
// const plus = document.getElementById("count");
// const btn = document.getElementById("btn");

// let Score = 0;


// increase.addEventListener("click", () => {
//     const incr = Score++;
//     plus.innerText = incr;
// });

// descrease.addEventListener("click", () => {
//     const dec = Score--;
//     plus.innerText = dec;
// });

// btn.addEventListener("click", ()=>{
//     Score = 0;
//     plus.innerText = Score;
// })