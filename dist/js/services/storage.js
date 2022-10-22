export class Store {
    constructor(store = 'Tasks') {
        this.store = store;
    }
    // devuelve algo. No recibe nada
    getStore() {
        const dataString = localStorage.getItem(this.store);
        if (!dataString)
            return [];
        return JSON.parse(dataString);
    }
    // Setea, le doy los datos. No devuelve nada
    setStore(data) {
        localStorage.setItem(this.store, JSON.stringify(data));
    }
}
