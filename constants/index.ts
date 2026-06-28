export { icons } from './icons';
export { homeImages } from './images/home';
export { sharedImages } from './images/shared';
export { aboutImages } from './images/about';
export { servicesImages } from './images/services';

import { homeImages } from './images/home';
import { sharedImages } from './images/shared';
import { aboutImages } from './images/about';
import { servicesImages } from './images/services';

/** @deprecated Prefer scoped imports: homeImages, sharedImages, aboutImages, servicesImages */
export const images = {
  ...homeImages,
  ...sharedImages,
  ...aboutImages,
  ...servicesImages,
};
