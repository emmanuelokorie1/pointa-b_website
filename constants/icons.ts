import GooglePlay from '@/assets/icons/google.svg';
import AppStore from '@/assets/icons/apple.svg';
import MessageIcon from '@/assets/icons/message.jpg';
import Nine1 from '@/assets/icons/brands/91.jpg';
import blaiz from '@/assets/icons/brands/blaiz.jpg';
import clara from '@/assets/icons/brands/clara.jpg';
import tuyaupay from '@/assets/icons/brands/tuyaupay.jpg';
import { mapToCloudinary } from '@/constants/cloudinary';

export const icons = {
  GooglePlay: mapToCloudinary(GooglePlay, 'assets/icons/google.svg'),
  AppStore: mapToCloudinary(AppStore, 'assets/icons/apple.svg'),
  MessageIcon: mapToCloudinary(MessageIcon, 'assets/icons/message.jpg'),
  Nine1: mapToCloudinary(Nine1, 'assets/icons/brands/91.jpg'),
  blaiz: mapToCloudinary(blaiz, 'assets/icons/brands/blaiz.jpg'),
  clara: mapToCloudinary(clara, 'assets/icons/brands/clara.jpg'),
  tuyaupay: mapToCloudinary(tuyaupay, 'assets/icons/brands/tuyaupay.jpg'),
};
