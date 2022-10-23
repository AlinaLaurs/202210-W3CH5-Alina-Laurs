import { Component } from './component.js';
export class Buttons extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `
        <div class="main__buttons">
            <a href=${this.pokemons.previous} class="main__buttonPrevious">Previous</a>
            <a href=${this.pokemons.next} class="main__buttonNext">Next</a>
        </div>`;
    }
}
