import { Component } from './component.js';
//import styles from './footer.module.css';

export class Footer extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        //<footer class="${styles.footer}">
        return `
        <footer>
            <address>ISDI COders</address>
        </footer>
        `;
    }
}
