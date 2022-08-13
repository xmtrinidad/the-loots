var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { getLoot } from '../APP_API';
import { SharedStyles } from '../styles/SharedStyles';
let LootCard = class LootCard extends LitElement {
    /**
     * The number of times the button has been clicked.
     */
    // @property({ type: Number })
    // count = 0;
    render() {
        return html `
      <div class="loot-card">
        <div class="loot-card-header">
          <div class="loot-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463 463"><path d="M247.5 0h-32C202.542 0 192 10.542 192 23.5v152c0 7.023 3.101 13.332 8 17.641V207.5c0 12.958 10.542 23.5 23.5 23.5h.5v162.234c-9.29 3.138-16 11.93-16 22.266 0 .494.049.986.146 1.471l8 40A7.5 7.5 0 0 0 223.5 463h16a7.5 7.5 0 0 0 7.354-6.029l8-40c.097-.484.146-.977.146-1.471 0-10.336-6.71-19.128-16-22.266V231h.5c12.958 0 23.5-10.542 23.5-23.5v-14.359c4.899-4.31 8-10.619 8-17.641v-152C271 10.542 260.458 0 247.5 0zm-14.148 448h-3.703l-6.625-33.128c.322-4.395 4.001-7.872 8.477-7.872s8.154 3.478 8.477 7.872L233.352 448zM207 23.5c0-4.687 3.813-8.5 8.5-8.5h32c4.687 0 8.5 3.813 8.5 8.5v152c0 4.687-3.813 8.5-8.5 8.5h-32c-4.687 0-8.5-3.813-8.5-8.5v-152zm41 184c0 4.687-3.813 8.5-8.5 8.5h-16c-4.687 0-8.5-3.813-8.5-8.5v-8.513c.167.004.332.013.5.013h32c.168 0 .333-.009.5-.013v8.513z"/><path d="M231.5 167c4.143 0 7.5-3.357 7.5-7.5v-120c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v120c0 4.143 3.357 7.5 7.5 7.5z"/></svg>
          </div>
          <div class="loot-name">
            <span>Screwdriver</span>
          </div>
        </div>
        <div class="loot-card-body">
          <table>
            <thead>
              <th>Scrap</th>
              <th>Quantity</th>
            </thead>
            <tbody>
              <tr>
                <td>Metal</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Plastic</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="loot-card-footer">
          <button>COLLECT</button>
        </div>
      </div>
     `;
    }
    firstUpdated() {
        console.log('meme');
        getLoot();
    }
};
LootCard.styles = [
    SharedStyles,
    css `
      :host {
        display: block;
      }

      .loot-card {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        width: fit-content;
        padding: 16px;
        
      }

      svg {
        width: 52px;
        height: 52px;
      }
    `
];
LootCard = __decorate([
    customElement('loot-card')
], LootCard);
export { LootCard };
//# sourceMappingURL=loot-card.js.map