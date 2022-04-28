import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PREFIX_CLASS, PREFIX_TAG } from '../../global/settings/settings';
import '../button/button';
import { IMAGE_ASPECT_RATIOS, IMAGE_FIT } from '../image/defs';
import '../image/image';
import '../videoPlayer/videoPlayer';
import stylesheet from './contentCard.scss';

@customElement(`${PREFIX_TAG}-content-card`)
export class kdContentCard extends LitElement {
  static styles = [stylesheet];

  @property({ type: String }) youtubeId;
  @property({ type: String }) videoTitle;
  @property({ type: String }) image;
  @property({ type: String }) imageAltText = '';
  @property({ type: String }) title;
  @property({ type: String }) titleSize;
  @property({ type: String }) ctaLink;
  @property({ type: String }) ctaTarget;
  @property({ type: String }) ctaLabel;
  @property({ type: String }) ctaIcon;
  @property({ type: String }) theme = '';

  protected _renderCta(): TemplateResult | string | void {
    if (this.ctaLink) {
      return html`
        <div class="${PREFIX_CLASS}-content-card__action-container">
          <kd-button
            icon=${this.ctaIcon}
            href=${this.ctaLink}
            target=${this.ctaTarget}
          >${this.ctaLabel}</kd-button>
        </div>
      `;
    }

    return null;
  }

  protected _renderMedia(): TemplateResult | string | void {
    if (this.youtubeId) {
      return html`
        <div class="${PREFIX_CLASS}-content-card__youtube">
          <kd-video-player youtubeId=${this.youtubeId} title=${this.videoTitle}></kd-video-player>
        </div>
      `;
    }

    if (this.image) {
      return html`
        <div class="${PREFIX_CLASS}-content-card__image">
          <kd-image 
            image=${this.image} 
            imageAltText=${this.imageAltText} 
            aspectRatio=${IMAGE_ASPECT_RATIOS.RATIO_1_1} 
            fit=${IMAGE_FIT.COVER} 
          />
        </div>
      `;
    }

    return null;
  }

  render() {
    return html`
      <div class="${PREFIX_CLASS}-content-card ${this.theme}">
        <div class="${PREFIX_CLASS}-content-card__content">
          <div class="${PREFIX_CLASS}-content-card__content-inner">
            ${this._renderMedia()}
            <h2 class="${PREFIX_CLASS}-content-card__title ${PREFIX_CLASS}-h2 ${this.titleSize}">
               <span>${this.title}</span>
            </h2>
            <span class="${PREFIX_CLASS}-content-card__hr"></span>
            <div class="${PREFIX_CLASS}-content-card__description">
              <slot></slot>
            </div>
            ${this._renderCta()}
          </div>
        </div>
      </div>
    `;
  }
}
