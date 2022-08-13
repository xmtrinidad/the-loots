import { LitElement } from 'lit';
import '../components/loot-card';
export declare class LootView extends LitElement {
    static styles: import("lit").CSSResult[];
    /**
     * The name to say "Hello" to.
     */
    name: string;
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'loot-view': LootView;
    }
}
//# sourceMappingURL=loot-view.d.ts.map