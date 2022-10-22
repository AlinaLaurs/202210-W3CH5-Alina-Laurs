import { Component } from './component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        //new Menu('header>slot');
    }
    createTemplate() {
        return `<header class="header">
            <div class="header__div">
                <h1>Pokémons</h1>
                <img class="header__logo" src="../assets/pokemon-logo.svg" alt="Pokemon logo"/>
            <div>
        </header>`;
    }
}
