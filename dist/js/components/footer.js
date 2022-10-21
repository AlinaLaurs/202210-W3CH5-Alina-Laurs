import { Component } from './component.js';
import styles from './footer.module.css' assert { type: 'css' };
export class Footer extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
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
