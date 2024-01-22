import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("villa-greeting")
export class VillaGreeting extends LitElement {
  @property() name: string | undefined;

  static styles = css`
    :host {
      color: var(--color-alias-text-default, #333);
    }

    :host p {
      font-weight: bold;
      font-family: sans-serif;
    }
  `;

  render() {
    return html`<p>Hello ${this.name}!</p>`;
  }
}
