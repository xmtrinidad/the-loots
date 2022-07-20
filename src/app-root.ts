 import {LitElement, html, css} from 'lit';
 import {customElement, property} from 'lit/decorators.js';
 
 @customElement('app-root')
 export class AppRoot extends LitElement {
   static override styles = css`
     :host {
       display: block;
     }
   `;
   @property({type: Number})
   count = 0;
 
   override render() {
     return html`
       <main>
        <h1>main works</h1>
       </main>
     `;
   }
 
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
 
 declare global {
   interface HTMLElementTagNameMap {
     'app-root': AppRoot;
   }
 }
 