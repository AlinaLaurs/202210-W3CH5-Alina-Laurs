import { Component, IComponent } from './component.js';

interface menuOptionI {
    path: string;
    label: string;
}

export class Menu extends Component implements IComponent {
    // No viene desde fuera (constructor) por eso la tipamos aqui
    template!: string;
    menuOptions: Array<menuOptionI>;
    constructor(public selector: string) {
        super();
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
        this.menuOptions.forEach(
            (item: menuOptionI) =>
                (template += `
        <li><a href="${item.path}">${item.label}</a></li>
        `)
        );
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
