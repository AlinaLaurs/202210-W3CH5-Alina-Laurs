import { Component } from './component.js';
import { Menu } from './menu.js';

export class Header extends Component {
    template: string;
    constructor(public selector: string) {
        super();
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
