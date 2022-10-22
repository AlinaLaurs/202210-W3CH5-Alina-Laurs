import { Component } from './component.js';
export class ItemTask extends Component {
    constructor(selector, item, handelDelete, handelChange) {
        super();
        this.selector = selector;
        this.item = item;
        this.handelDelete = handelDelete;
        this.handelChange = handelChange;
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        setTimeout(() => {
            document.querySelector(`#i${this.item.id}`).addEventListener('click', () => {
                this.handelDelete(this.item.id);
            });
            document.querySelector(`#c${this.item.id}`).addEventListener('change', () => {
                this.handelChange(this.item.id);
            });
        }, 100);
    }
    createTemplate() {
        return `<li> 
        <input id="c${this.item.id}" type="checkbox" ${this.item.isComplete ? 'checked' : ''}>
        <span> ${this.item.id} </span> -
        <span> ${this.item.title}</span>
        <span class="button" id="i${this.item.id}">🗑️</span>
        </li>`;
    }
}
