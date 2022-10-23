import { Component, IComponent } from './component.js';

interface menuOptionI {
    path: string;
    label: string;
}

export class Menu extends Component implements IComponent {
    template!: string;
    menuOptions: Array<menuOptionI>;
    constructor(public selector: string) {
        super();
        this.menuOptions = [
            { path: '', label: 'Principal' },
            { path: '', label: 'Ficha Pokémon' },
            { path: '', label: 'Mis Pokémons' },
        ];
        this.manageComponent();
    }
    createTemplate() {
        let template = `<nav class="header__nav"><ul class="header__menu">`;
        this.menuOptions.forEach(
            (item: menuOptionI) =>
                (template += `<ul class="header__page"><a class="header__element" href="${item.path}">${item.label}</a></ul>
        `)
        );
        template += `</ul></nav>`;
        return template;
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
}
