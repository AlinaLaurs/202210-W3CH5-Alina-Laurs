import { Component } from './component.js';
import { Menu } from './menu.js';

export class Header extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `<header class="header">
            <div class="header__div">
                <h1 class="header__h1">Pokémons</h1>
                <img class="header__logo" src="../assets/pokemon-logo.svg" alt="Pokemon logo"/>
            </div>
        </header>`;
    }
}
