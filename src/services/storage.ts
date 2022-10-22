export class Store<T> {
    constructor(public store: string = 'Tasks') {}

    // devuelve algo. No recibe nada
    getStore(): Array<T> {
        const dataString = localStorage.getItem(this.store);
        if (!dataString) return [];
        return JSON.parse(dataString);
    }
    // Setea, le doy los datos. No devuelve nada
    setStore(data: Array<T>) {
        localStorage.setItem(this.store, JSON.stringify(data));
    }
}
