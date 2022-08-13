
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../components/loot-card';
import { SharedStyles } from '../styles/SharedStyles';

@customElement('loot-view')
export class LootView extends LitElement {
  static override styles = [
  SharedStyles,
  css`
    :host {
      display: block;
    }
  `];

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  override render() {
    return html`
      <div class="loot-view">
        <h1>The Loots</h1>
        <div class="loots">
          <loot-card></loot-card>
        </div>
      </div>
     `;
  }

  // private _onClick() {
  //   this.count++;
  //   this.dispatchEvent(new CustomEvent('count-changed'));
  // }
}

declare global {
  interface HTMLElementTagNameMap {
    'loot-view': LootView;
  }
}
