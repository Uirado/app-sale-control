import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface ClickableItem {
  text?: string;
  icon?: IconDefinition;
  action?: () => any;
  link?: string;
}
