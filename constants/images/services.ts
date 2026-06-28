import serviceHero from '@/assets/images/services/serviceHero.svg';
import foodDelivery from '@/assets/images/services/food_delivery.png';
import packageDelivery from '@/assets/images/services/package_delivery.png';
import merchantFulfillment from '@/assets/images/services/merchant_fulfillment.png';
import sameDay from '@/assets/images/services/same_day.png';
import smeLogistics from '@/assets/images/services/sme_logistics.png';
import whyChoose from '@/assets/images/services/whyChoose.svg';
import whyChoose2 from '@/assets/images/services/whyChoose2.svg';
import whyChoose3 from '@/assets/images/services/whyChoose3.svg';
import whyChoose4 from '@/assets/images/services/whyChoose4.svg';
import contact from '@/assets/images/contact.svg';
import contactCard from '@/assets/images/contacts/card.svg';
import { mapToCloudinary } from '@/constants/cloudinary';

export const servicesImages = {
  serviceHero: mapToCloudinary(serviceHero, 'assets/images/services/serviceHero.svg'),
  foodDelivery: mapToCloudinary(foodDelivery, 'assets/images/services/food_delivery.png'),
  packageDelivery: mapToCloudinary(packageDelivery, 'assets/images/services/package_delivery.png'),
  merchantFulfillment: mapToCloudinary(merchantFulfillment, 'assets/images/services/merchant_fulfillment.png'),
  sameDay: mapToCloudinary(sameDay, 'assets/images/services/same_day.png'),
  smeLogistics: mapToCloudinary(smeLogistics, 'assets/images/services/sme_logistics.png'),
  whyChoose: mapToCloudinary(whyChoose, 'assets/images/services/whyChoose.svg'),
  whyChoose2: mapToCloudinary(whyChoose2, 'assets/images/services/whyChoose2.svg'),
  whyChoose3: mapToCloudinary(whyChoose3, 'assets/images/services/whyChoose3.svg'),
  whyChoose4: mapToCloudinary(whyChoose4, 'assets/images/services/whyChoose4.svg'),
  contact: mapToCloudinary(contact, 'assets/images/contact.svg'),
  contactCard: mapToCloudinary(contactCard, 'assets/images/contacts/card.svg'),
};
