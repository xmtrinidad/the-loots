var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './views/loot-view';
let AppRoot = class AppRoot extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
        //  private _onClick() {
        //    this.count++;
        //    this.dispatchEvent(new CustomEvent('count-changed'));
        //  }
        /**
         * Formats a greeting
         * @param name The name to say "Hello" to
         */
        //  sayHello(name: string): string {
        //    return `Hello, ${name}`;
        //  }
    }
    render() {
        return html `
      <main>
        <loot-view></loot-view>
      </main>
     `;
    }
};
AppRoot.styles = css `
     :host {
       display: block;
     }
   `;
__decorate([
    property({ type: Number })
], AppRoot.prototype, "count", void 0);
AppRoot = __decorate([
    customElement('app-root')
], AppRoot);
export { AppRoot };
//# sourceMappingURL=app-root.js.map