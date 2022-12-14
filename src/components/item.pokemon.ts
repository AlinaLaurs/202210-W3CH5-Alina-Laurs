import { IPokemon } from '../models/pokemon.js';
import { Component } from './component.js';

export class ItemPokemon extends Component {
    template!: string;
    constructor(public selector: string, public item: any) {
        super();
        this.item = item;
        this.manageComponent();
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }

    createTemplate() {
        return `<div class="main__card">
            <img class="main__pokemon" src="${
                this.item.sprites.other.dream_world.front_default
            }" alt="${this.item.species.name}"/>
            <h2 class="main__name">${this.item.name
                .charAt(0)
                .toUpperCase()}${this.item.name.slice(1)}</h2>
        </div>`;
    }
}
