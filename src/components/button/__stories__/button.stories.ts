import { html } from 'lit';
import { PREFIX_TAG } from '../../../global/settings/settings';
import * as ICON_IDS from '../../../global/settings/iconIds';
import { createOptionsArray } from '../../../global/mixins/global';
import '../button';

const iconOptions = createOptionsArray(ICON_IDS);

export default {
  title: 'Web Components/Button',
  component: `${PREFIX_TAG}-button`,
  parameters: {},
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'text'],
      control: { type: 'select' },
    },
    theme: {
      options: ['', `${PREFIX_TAG}-theme-dark-stone`, `${PREFIX_TAG}-theme-cloud`],
      control: { type: 'select' },
    },
    href: {
      control: { type: 'text' },
    },
    target: {
      options: ['_blank', '_self', '_parent', '_top'],
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },
    size: {
      options: ['default', 'large', 'small'],
      control: { type: 'radio' },
    },
    icon: {
      options: [
        'none',
        ...iconOptions,
      ],
      control: {
        type: 'select',
        labels: {
          none: 'None',
        },
      },
    },
  },
};

const Template = args => {
  return html`
    <kd-button
        type=${args.type}
        size=${args.size != 'default' ? args.size : null}
        icon=${args.icon != 'none' ? args.icon : null}
        href=${args.href}
        target=${args.target}
        theme=${args.theme}
    >${args.label}</kd-button>
  `;
};

export const Button = Template.bind({});
Button.args = {
  type: 'primary',
  href: 'http://kyndryl.com',
  target: '_self',
  label: 'Click here',
  size: 'default',
  icon: 'none',
};
