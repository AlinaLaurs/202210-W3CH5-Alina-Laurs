import { Component } from './component.js';

export class Base extends Component implements IComponent {
    template!: string;
    constructor(public selector: string) {
        super();
        this.manageComponent();
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }

    createTemplate() {
        return ``;
    }
}

export interface IComponent {
    createTemplate: () => string;
    manageComponent: () => void;
}

// Plantilla para crear componentes
