import { Component } from './component.js';
import styles from './footer.module.css' assert { type: 'css' };

export class Footer extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        console.log(styles);
    }
    createTemplate() {
        return `
         <footer class="${styles.footer}"
            <address>ISDI COders</address>
        </footer>
        `;
    }
}
