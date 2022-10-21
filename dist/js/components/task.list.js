var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Store } from '../services/storage.js';
import { TaskApi } from '../services/task.api.js';
import { AddTask } from './add.task.js';
import { Component } from './component.js';
import { ItemTask } from './item,task.js';
export class TaskList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.api = new TaskApi();
        this.storeService = new Store('Tasks');
        this.tasks = [];
        // if (this.storeService.getStore().length === 0) {
        //     this.tasks = [...TASKS];
        //     this.storeService.setStore(this.tasks);
        // } else {
        //     this.tasks = this.storeService.getStore();
        // }
        this.startTasks();
        // Sin async / await
        // this.api.getTask().then((data) => {
        //     this.tasks = data;
        //     this.manageComponent();
        // });
    }
    startTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            this.tasks = yield this.api.getTask();
            this.manageComponent();
        });
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddTask('slot#add-task', this.handleAdd.bind(this));
    }
    createTemplate() {
        let template = `<section>
                <h2>Tareas</h2>
                <slot id="add-task"></slot>
                <ul>`;
        this.tasks.forEach((item) => {
            template += new ItemTask('', item, this.handlerEraser.bind(this), this.handlerComplete.bind(this)).template;
        });
        template += `</ul>
            </section>`;
        return template;
    }
    handleAdd() {
        const title = document.querySelector('#title')
            .value;
        const responsible = document.querySelector('#resp').value;
        // const newTask = new Task(title, responsible)
        const newTask = {
            title,
            responsible,
            isComplete: false,
        };
        this.api.createTask(newTask).then((task) => {
            this.tasks.push(task);
            // this.storeService.setStore(this.tasks);
            this.manageComponent();
        });
    }
    handlerEraser(deletedID) {
        this.api.deleteTask(deletedID).then((response) => {
            if (response.ok) {
                this.tasks = this.tasks.filter((item) => item.id !== deletedID);
                // this.storeService.setStore(this.tasks);
                this.manageComponent();
            }
        });
    }
    handlerComplete(changeID) {
        const i = this.tasks.findIndex((item) => item.id === changeID);
        const newState = !this.tasks[i].isComplete;
        this.api.updateTask(changeID, { isComplete: newState }).then((task) => {
            this.tasks[i].isComplete = task.isComplete;
        });
        // this.storeService.setStore(this.tasks);
    }
}
