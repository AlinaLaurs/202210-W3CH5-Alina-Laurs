import { Component } from './component.js';
export class Menu extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.menuOptions = [
            { path: '', label: 'Inicio' },
            { path: '', label: 'Tareas' },
            { path: '', label: 'Nosotros' },
        ];
        this.manageComponent();
    }
    createTemplate() {
        //Inicio de la lista
        let template = '<nav><ul>';
        //Iteramos el array y por cada vuelta construimos la lista
        this.menuOptions.forEach((item) => (template += `
        <li><a href="${item.path}">${item.label}</a></li>
        `));
        //Final de la lista
        template += '</ul></nav>';
        return template;
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
    }
}
/* <nav class="nav">
                <ul class="nav__menu">
                    <a class="nav__favorites" href="./favorites.html"
                        >Mis Pokémons favoritos</a
                    >
                </ul>
            </nav> */
