export class TaskApi {
    constructor() {
        this.url = 'http://localhost:3000/tasks';
    }
    // Read / Get
    getTask() {
        return fetch(this.url).then((response) => response.json());
    }
}
