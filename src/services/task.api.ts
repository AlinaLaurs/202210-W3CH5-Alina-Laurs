import { Task } from '../models/task.js';

export class TaskApi {
    url: string;
    constructor() {
        this.url = 'http://localhost:3000/tasks';
    }
    // Read / Get
    getTask(): Promise<Array<Task>> {
        return fetch(this.url).then((response) => response.json());
    }
    // Create / Post
    // Update / Patch
    // Delete / Delete
}
