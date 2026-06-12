import Landing1 from "@/assets/images/home/landing1.jpg"
import Landing2 from "@/assets/images/home/landing2.jpg"
import Landing3 from "@/assets/images/home/landing3.jpg"
import Landing4 from "@/assets/images/home/landing4.jpg"
import Landing5 from "@/assets/images/home/landing5.jpg"
import Landing6 from "@/assets/images/home/landing6.jpg"

import carPackage from "@/assets/images/carPackage.svg"
import box2 from "@/assets/images/box2.svg"
import packages from "@/assets/images/packages.svg"
import iPhone from "@/assets/images/iPhone.svg"
import Frame1 from "@/assets/images/Frame1.jpg"
import merchant1 from "@/assets/images/merchant/merchant1.svg"
import merchant2 from "@/assets/images/merchant/merchant2.svg"
import merchant3 from "@/assets/images/merchant/merchant3.svg"
import iPhone2 from "@/assets/images/iPhone2.svg"
import iPhone3 from "@/assets/images/iPhone3.svg"

//how its works
import hiw1 from "@/assets/images/howitworks/step1.svg"
import hiw2 from "@/assets/images/howitworks/step2.svg"
import hiw3 from "@/assets/images/howitworks/step3.svg"
import hiw4 from "@/assets/images/howitworks/step4.svg"

//contact
import contact from "@/assets/images/contact.svg"


//slides
import slide1 from "@/assets/images/home/slide1.jpg"
import slide2 from "@/assets/images/home/slide2.jpg"
import slide3 from "@/assets/images/home/slide3.jpg"
import slide4 from "@/assets/images/home/slide4.jpg"
import slide5 from "@/assets/images/home/slide5.jpg"
import slide6 from "@/assets/images/home/slide6.jpg"
import slide7 from "@/assets/images/home/slide7.jpg"
import slide8 from "@/assets/images/home/slide8.jpg"
import slide9 from "@/assets/images/home/slide9.jpg"

//icons
import GooglePlay from "@/assets/icons/google.svg"
import AppStore from "@/assets/icons/apple.svg"
import DeliveryBike from "@/assets/icons/delivery-bike.png"
import DeliveryBike1 from "@/assets/icons/bike.svg"

//brands
import Nine1 from "@/assets/icons/brands/91.jpg"
import blaiz from "@/assets/icons/brands/blaiz.jpg"
import clara from "@/assets/icons/brands/clara.jpg"
import tuyaupay from "@/assets/icons/brands/tuyaupay.jpg"



const mapToCloudinary = (staticImage: any, relativePath: string) => {
    if (!staticImage) return staticImage;
    const isSvg = relativePath.endsWith('.svg');
    const optimization = isSvg ? '' : 'f_auto,q_auto/';
    return {
        ...staticImage,
        src: `https://res.cloudinary.com/dzyenrmzb/image/upload/${optimization}pointab-assets/${relativePath}`
    };
};

export const images = {
    Landing1: mapToCloudinary(Landing1, "assets/images/home/landing1.jpg"),
    Landing2: mapToCloudinary(Landing2, "assets/images/home/landing2.jpg"),
    Landing3: mapToCloudinary(Landing3, "assets/images/home/landing3.jpg"),
    Landing4: mapToCloudinary(Landing4, "assets/images/home/landing4.jpg"),
    Landing5: mapToCloudinary(Landing5, "assets/images/home/landing5.jpg"),
    Landing6: mapToCloudinary(Landing6, "assets/images/home/landing6.jpg"),
    DeliveryBike: mapToCloudinary(DeliveryBike, "assets/icons/delivery-bike.png"),
    DeliveryBike1: mapToCloudinary(DeliveryBike1, "assets/icons/bike.svg"),
    slide1: mapToCloudinary(slide1, "assets/images/home/slide1.jpg"),
    slide2: mapToCloudinary(slide2, "assets/images/home/slide2.jpg"),
    slide3: mapToCloudinary(slide3, "assets/images/home/slide3.jpg"),
    slide4: mapToCloudinary(slide4, "assets/images/home/slide4.jpg"),
    slide5: mapToCloudinary(slide5, "assets/images/home/slide5.jpg"),
    slide6: mapToCloudinary(slide6, "assets/images/home/slide6.jpg"),
    slide7: mapToCloudinary(slide7, "assets/images/home/slide7.jpg"),
    slide8: mapToCloudinary(slide8, "assets/images/home/slide8.jpg"),
    slide9: mapToCloudinary(slide9, "assets/images/home/slide9.jpg"),
    carPackage: mapToCloudinary(carPackage, "assets/images/carPackage.svg"),
    box2: mapToCloudinary(box2, "assets/images/box2.svg"),
    packages: mapToCloudinary(packages, "assets/images/packages.svg"),
    iPhone: mapToCloudinary(iPhone, "assets/images/iPhone.svg"),
    Frame1: mapToCloudinary(Frame1, "assets/images/Frame1.jpg"),
    merchant1: mapToCloudinary(merchant1, "assets/images/merchant/merchant1.svg"),
    merchant2: mapToCloudinary(merchant2, "assets/images/merchant/merchant2.svg"),
    merchant3: mapToCloudinary(merchant3, "assets/images/merchant/merchant3.svg"),

    contact: mapToCloudinary(contact, "assets/images/contact.svg"),

    iPhone2: mapToCloudinary(iPhone2, "assets/images/iPhone2.svg"),
    iPhone3: mapToCloudinary(iPhone3, "assets/images/iPhone3.svg"),

    //how its works
    hiw1: mapToCloudinary(hiw1, "assets/images/howitworks/step1.svg"),
    hiw2: mapToCloudinary(hiw2, "assets/images/howitworks/step2.svg"),
    hiw3: mapToCloudinary(hiw3, "assets/images/howitworks/step3.svg"),
    hiw4: mapToCloudinary(hiw4, "assets/images/howitworks/step4.svg"),
}

export const icons = {
    GooglePlay: mapToCloudinary(GooglePlay, "assets/icons/google.svg"),
    AppStore: mapToCloudinary(AppStore, "assets/icons/apple.svg"),

    //brands
    Nine1: mapToCloudinary(Nine1, "assets/icons/brands/91.jpg"),
    blaiz: mapToCloudinary(blaiz, "assets/icons/brands/blaiz.jpg"),
    clara: mapToCloudinary(clara, "assets/icons/brands/clara.jpg"),
    tuyaupay: mapToCloudinary(tuyaupay, "assets/icons/brands/tuyaupay.jpg"),
}