import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { PREFIX_CLASS, PREFIX_TAG } from '../../global/settings/settings';
import '../icon/icon';
import stylesheet from './button.scss';


/**
 * Kyndryl branded L0
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement(`${PREFIX_TAG}-button`)
export class Button extends LitElement {
  static styles = [stylesheet];

  @property({ type: String }) type;
  @property({ type: String }) href;
  @property({ type: String }) target;
  @property({ type: String }) size;
  @property({ type: String }) icon;
  @property({ type: String }) theme;

  render() {
    const classes = classMap({
      [`${PREFIX_CLASS}-btn-primary`]:
        this.type === 'primary' || !this.type,
      [`${PREFIX_CLASS}-btn-secondary`]: this.type === 'secondary',
      [`${PREFIX_CLASS}-btn-text`]: this.type === 'text',
      [`${PREFIX_CLASS}-btn-lg`]: this.size === 'large',
      [`${PREFIX_CLASS}-btn-sm`]: this.size === 'small',
      [this.theme]: this.theme?.length,
    });
    if (!this.icon) {
      return html`<a id="button" href=${this.href} target=${this.target} class=${classes}>
        <slot></slot>
      </a>`;
    } else {
      return html`<a id="button" href=${this.href} target=${this.target} class=${classes}>
        <slot></slot>
        <span class="${PREFIX_CLASS}-btn--icon">
          <kd-icon icon=${this.icon}></kd-icon>
        </span>
      </a>`;
    }
  }
}
