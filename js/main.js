
// __________________________declaracione de variables_______________________ 
// *************buttons*************
var botonAdd = document.querySelector('#btnAdd');
//donde se pintan los tasks
var allreminde = document.querySelector('.alltasks');
// id de los tasks para poder borrarlos
var idTask = 7;
//recogida faq de la parte de abajo del main
var faq = $('.faq h2');
//warrning rellene datos
var msn = document.querySelector('#msn-try');
//input serach value
var inputSearch = document.querySelector('#search');
//btn search all
var btnSearch = document.querySelector('#searchBtnAll');
//input choose
var selectChoose = document.querySelector('#select-sectionAll');
// variable array


var btnSearch2 = $('#searchBtnAll');

console.log(btnSearch2.text());


var reminde = new Array();// array
reminde = [
    { taskReD: 'Estudiar', idColor: 'beige', idReD: 0 },
    { taskReD: 'Comer', idColor: 'militar-green', idReD: 1 },
    { taskReD: 'Beber RedBull', idColor: 'yellow', idReD: 2 },
    { taskReD: 'Limpiar', idColor: 'militar-green', idReD: 3 },
    { taskReD: 'Tatuarme', idColor: 'yellow', idReD: 4 },
    { taskReD: 'Pasear la tortuga', idColor: 'militar-green', idReD: 5 },
    { taskReD: 'Aprender CSS :(', idColor: 'beige', idReD: 6 },
];


// function faq acordeo (solo por practocar XD) 
faq.on('click', function () {
    $('.faq p').slideUp(400);
    $('.faq h2').removeClass('titulo');
    let contenido = $(this).next();
    if (contenido.css('display') === 'none') {
        contenido.slideDown(400);
        $(this).addClass('titulo');
    } else {
        contenido.slideUp(400);
    }
})

function addTasks(pTitTask, pCatTask) {
    let newTask = {};

    newTask.taskReD = pTitTask
    newTask.idColor = pCatTask
    newTask.idReD = idTask;
    idTask++
    reminde.push(newTask);
    printOneTask(newTask);

}
//boton que recoge los valores del submit y el texto para posteriormete guardarlos y enviarlos a addTqasks
botonAdd.addEventListener('click', () => {
    let title = document.querySelector('#title-add').value;
    let cat = document.querySelector('#select-section').value;
    let warning = document.querySelector('#add-reminde');
    msn.innerText = "";
    warning.style.border = "";
    if (title != "" && cat != "") {
        addTasks(title, cat);
    } else {
        msn.innerText = "Empty input"
        warning.style.border = '1px solid red';
    }
})
//print task 
function printOneTask(pTask) {
    //precario
    switch (pTask.idColor) {
        case "yellow":
            pTask.idColor = "yellow";
            break;
        case "militar-green":
            pTask.idColor = "militar-green";
            break;
        case "beige":
            pTask.idColor = "beige";
            break;
    }

    allreminde.innerHTML +=
        `
        <div class="task" id="${pTask.idReD}">
            <p>${pTask.taskReD}</p>
            <div id="${pTask.idColor}">
            </div>
            <button id="btn-remove">Delete</button>
        </div>
        `


}
//print all tasks
function printAllTasks(pArrayTask) {
    for (task of pArrayTask) {
        printOneTask(task);
    }
}
printAllTasks(reminde);

//find task tambien se puede hacer con un keyup pero me parece mas comodo asi
inputSearch.addEventListener('input', () => {

    let filterTasksArray = [];
    allreminde.innerHTML = "";

    for (let task of reminde) {
        let txt = inputSearch.value.toLowerCase();
        let choose = selectChoose.value;
        if (task.taskReD.toLowerCase().indexOf(txt) != -1 && task.idColor.indexOf(choose) != -1) {
            filterTasksArray.push(task);
            allreminde.innerHTML +=
                `
            <div class="task" id="${task.idReD}">
                <p>${task.taskReD}</p>
                <div id="${task.idColor}">
                </div>
                <button id="btn-remove">Delete</button>
            </div>
            `
        }
    }
})

var divTask = document.querySelectorAll('.task');
console.log(divTask);

for (let div of divTask) {
    div.addEventListener('click', deleteT);
}

//delete function


function deleteT(event) {
    console.log(event.target);
    event.target.parentElement.remove();

};