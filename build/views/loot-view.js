var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../components/loot-card';
import { SharedStyles } from '../styles/SharedStyles';
let LootView = class LootView extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The name to say "Hello" to.
         */
        this.name = 'World';
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
        // private _onClick() {
        //   this.count++;
        //   this.dispatchEvent(new CustomEvent('count-changed'));
        // }
    }
    render() {
        return html `
      <div class="loot-view">
        <h1>The Loots</h1>
        <div class="loots">
          <loot-card></loot-card>
        </div>
      </div>
     `;
    }
};
LootView.styles = [
    SharedStyles,
    css `
    :host {
      display: block;
    }
  `
];
__decorate([
    property()
], LootView.prototype, "name", void 0);
__decorate([
    property({ type: Number })
], LootView.prototype, "count", void 0);
LootView = __decorate([
    customElement('loot-view')
], LootView);
export { LootView };
//# sourceMappingURL=loot-view.js.map