import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-greeting")
export class MyGreeting extends LitElement {
  @property() name: string | undefined;

  static styles = css`
    :host {
      color: hotpink;
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
