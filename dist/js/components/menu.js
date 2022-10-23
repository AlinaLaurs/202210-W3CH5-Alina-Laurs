import { Component } from './component.js';
export class Menu extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.menuOptions = [
            { path: '', label: 'Principal' },
            { path: '', label: 'Mis Pokémons' },
        ];
        this.manageComponent();
    }
    createTemplate() {
        let template = `<nav class="header__nav"><ul class="header__menu">`;
        this.menuOptions.forEach((item) => (template += `<ul class="header__page"><a class="header__element" href="${item.path}">${item.label}</a></ul>
        `));
        template += `</ul></nav>`;
        return template;
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
    }
}
