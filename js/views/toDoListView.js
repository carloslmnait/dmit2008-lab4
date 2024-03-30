import { toDoItemTemplate } from "../templates/toDoItemTemplate";
import { subscribe } from "../models/toDoListModel";
import { deleteToDoController } from "../controllers/deleteToDoController";
import { updateToDoController } from "../controllers/updateToDoController";
// Import add to do
import { addToDoController } from "../controllers/toDoListController";

let view;


export function toDoListView() {
    view = document.querySelector('#to-do-list')
    view.addEventListener('click', onHandleClick)
    // render()
}

subscribe(render)

function render(data) {
    const div = document.createElement('div')
    const toDoList = document.querySelector('#item-container')
    toDoList.replaceChildren()
    // const testToDo = div.prepend(toDoItemTemplate(testObject))

    data.forEach((item) => {
        div.prepend(toDoItemTemplate(item))
    })

    toDoList.append(div)
}

function onHandleClick(e) {
    switch (e.target.id) {
        case 'delete':
            deleteToDoController(e.target.dataset.uid)
            break
        case 'edit':
            console.log(e.target.dataset.uid)
            updateToDoController(e.target.dataset.uid)
            break
        // declare addtodo
        case 'add':
            addToDoController();
            break;
        default:
            null
    }
}