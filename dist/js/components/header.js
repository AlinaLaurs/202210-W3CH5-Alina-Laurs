import { Component } from './component.js';
import { Menu } from './menu.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        new Menu('header>slot');
    }
    createTemplate() {
        return `
         <header>
            <h1>TODO List</h1>
            <slot></slot>
        </header>
        `;
    }
}
