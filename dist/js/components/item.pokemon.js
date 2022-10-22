import { Component } from './component.js';
export class ItemPokemon extends Component {
    constructor(selector, item) {
        super();
        this.selector = selector;
        this.item = item;
        this.item = item;
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `<div class="main__card">
        <img
                class="main__pokemon"
                src="${this.item.sprites.other.dream_world.front_default}" alt="${this.item.species.name}"
            />
        <h2> ${this.item.name} </h2>
        </div>`;
    }
}
