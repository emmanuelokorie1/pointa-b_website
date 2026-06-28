import carPackage from '@/assets/images/carPackage.svg';
import box2 from '@/assets/images/box2.svg';
import packages from '@/assets/images/packages.svg';
import iPhone from '@/assets/images/iPhone.svg';
import Frame1 from '@/assets/images/Frame1.jpg';
import iPhone2 from '@/assets/images/iPhone2.svg';
import iPhone3 from '@/assets/images/iPhone3.svg';
import { mapToCloudinary } from '@/constants/cloudinary';

export const sharedImages = {
  carPackage: mapToCloudinary(carPackage, 'assets/images/carPackage.svg'),
  box2: mapToCloudinary(box2, 'assets/images/box2.svg'),
  packages: mapToCloudinary(packages, 'assets/images/packages.svg'),
  iPhone: mapToCloudinary(iPhone, 'assets/images/iPhone.svg'),
  Frame1: mapToCloudinary(Frame1, 'assets/images/Frame1.jpg'),
  iPhone2: mapToCloudinary(iPhone2, 'assets/images/iPhone2.svg'),
  iPhone3: mapToCloudinary(iPhone3, 'assets/images/iPhone3.svg'),
};
