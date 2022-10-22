import { ISerie } from '../../models/series/serie.js';
import { Component } from '../component.js';

export class SeriesCard extends Component {
    template!: string;
    constructor(public selector: string, public serie: ISerie) {
        super();
        this.manageComponent();
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }

    createTemplate() {
        let template = `
        <li class="serie">
            <img
                class="serie__poster"
                src="${this.serie.poster}"
                alt="${this.serie.name} poster"
            />
            <h4 class="serie__title">${this.serie.name}</h4>
            <p class="serie__info">${this.serie.creator} (${this.serie.year})</p>
            <ul class="score">
            <li class="score__star">
                <i class="icon-score far fa-star" title="1/5"></i>
            </li>
            <li class="score__star">
                <i class="icon-score far fa-star" title="2/5"></i>
            </li>
            <li class="score__star">
                <i class="icon-score far fa-star" title="3/5"></i>
            </li>
            <li class="score__star">
                <i class="icon-score far fa-star" title="4/5"></i>
            </li>
            <li class="score__star">
                <i class="icon-score far fa-star" title="5/5"></i>
            </li>
        </ul>
            <i class="fas fa-times-circle icon--delete" id="d${this.serie.id}"></i>
        </li>`;
        return template;
    }
}
