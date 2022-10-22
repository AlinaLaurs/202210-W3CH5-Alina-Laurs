import { TASKS } from '../models/data.js';
import { Task } from '../models/pokemon.js';
import { Store } from '../services/storage.js';
import { TaskApi } from '../services/task.api.js';
import { AddTask } from './add.task.js';
import { Component } from './component.js';
import { ItemTask } from './item.task.js';

export class TaskList extends Component {
    template!: string;
    tasks: Array<Task>;
    storeService: Store<Task>;
    api: TaskApi;
    constructor(public selector: string) {
        super();
        this.api = new TaskApi();
        this.storeService = new Store<Task>();
        this.tasks = [];
        // if (this.storeService.getStore().length === 0) {
        //     this.tasks = [...TASKS];
        //     this.storeService.setStore(this.tasks);
        // } else {
        //     this.tasks = this.storeService.getStore();
        // }

        // SIN ASYNC AWAIT
        // this.api.getTask().then((data) => {
        //     this.tasks = data;
        //     this.manageComponent();
        // });
        this.startTasks();
    }

    // CON ASYNC AWAIT
    async startTasks() {
        this.tasks = await this.api.getTask();
        this.manageComponent();
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
        this.tasks.forEach((item: Task) => {
            template += new ItemTask(
                '',
                item,
                this.handlerEraser.bind(this),
                this.handlerComplete.bind(this)
            ).template;
        });
        template += `</ul>
            </section>`;
        return template;
    }

    handleAdd() {
        const title = (document.querySelector('#title') as HTMLInputElement)
            .value;
        const responsible = (
            document.querySelector('#resp') as HTMLInputElement
        ).value;
        this.tasks.push(new Task(title, responsible));
        this.storeService.setStore(this.tasks);
        this.manageComponent();
    }

    handlerEraser(deletedId: number) {
        this.tasks = this.tasks.filter((item) => item.id !== deletedId);
        this.storeService.setStore(this.tasks);
        this.manageComponent();
    }

    handlerComplete(changeId: number) {
        const i = this.tasks.findIndex((item) => item.id === changeId);
        this.tasks[i].isComplete = !this.tasks[i].isComplete;
        this.storeService.setStore(this.tasks);
    }
}
