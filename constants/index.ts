import Landing1 from "@/assets/images/home/landing1.svg"
import Landing2 from "@/assets/images/home/landing2.svg"
import Landing3 from "@/assets/images/home/landing3.jpg"
import Landing4 from "@/assets/images/home/landing4.svg"
import Landing5 from "@/assets/images/home/landing5.svg"
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
import contactCard from "@/assets/images/contacts/card.svg"

//how its works
import hiw1 from "@/assets/images/howitworks/step1.svg"
import hiw2 from "@/assets/images/howitworks/step2.svg"
import hiw3 from "@/assets/images/howitworks/step3.svg"
import hiw4 from "@/assets/images/howitworks/step4.svg"

//contact
import contact from "@/assets/images/contact.svg"

//aboutUs
import world from "@/assets/images/aboutUs/world.svg"
import moreThanJust from "@/assets/images/aboutUs/morethan.svg"
import morethan1 from "@/assets/images/aboutUs/morethan1.svg"
import morethan1Background from "@/assets/images/aboutUs/morethan1Background.svg"
import morethan2 from "@/assets/images/aboutUs/morethan2.svg"
import morethan3 from "@/assets/images/aboutUs/morethan3.svg"
import morethan4 from "@/assets/images/aboutUs/morethan4.svg"
import aboutHero from "@/assets/images/aboutUs/aboutHero.svg"
import ourMission from "@/assets/images/aboutUs/ourMission.svg"
import ourValue1 from "@/assets/images/aboutUs/ourValue1.svg"
import ourValue2 from "@/assets/images/aboutUs/ourValue2.svg"
import ourValue3 from "@/assets/images/aboutUs/ourValue3.svg"
import ourValue4 from "@/assets/images/aboutUs/ourValue4.svg"
import team1 from "@/assets/images/aboutUs/team1.png"
import team2 from "@/assets/images/aboutUs/team2.png"
import team3 from "@/assets/images/aboutUs/team3.png"
import team4 from "@/assets/images/aboutUs/team4.png"
import team5 from "@/assets/images/aboutUs/team5.png"
import team6 from "@/assets/images/aboutUs/team6.png"
import serviceHero from "@/assets/images/services/serviceHero.svg"
import foodDelivery from "@/assets/images/services/food_delivery.png"
import packageDelivery from "@/assets/images/services/package_delivery.png"
import merchantFulfillment from "@/assets/images/services/merchant_fulfillment.png"
import sameDay from "@/assets/images/services/same_day.png"
import smeLogistics from "@/assets/images/services/sme_logistics.png"
import whyChoose from "@/assets/images/services/whyChoose.svg"
import whyChoose2 from "@/assets/images/services/whyChoose2.svg"
import whyChoose3 from "@/assets/images/services/whyChoose3.svg"
import whyChoose4 from "@/assets/images/services/whyChoose4.svg"



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
import MessageIcon from "@/assets/icons/message.jpg"
import milestoneIcon from "@/assets/icons/tick.svg"

//brands
import Nine1 from "@/assets/icons/brands/91.jpg"
import blaiz from "@/assets/icons/brands/blaiz.jpg"
import clara from "@/assets/icons/brands/clara.jpg"
import tuyaupay from "@/assets/icons/brands/tuyaupay.jpg"



const mapToCloudinary = (staticImage: any, relativePath: string) => {
    if (!staticImage) return staticImage;
    const isSvg = relativePath.endsWith('.svg');
    const optimization = isSvg ? '' : 'f_auto,q_auto/';
    
    // Extract Next.js webpack/turbopack content hash from staticImage.src
    // This is identical on both server and client, avoiding hydration mismatches.
    let hash = '';
    if (staticImage.src) {
        const cleanSrc = staticImage.src.split('?')[0];
        const filename = cleanSrc.substring(cleanSrc.lastIndexOf('/') + 1);
        const baseFilename = relativePath.substring(relativePath.lastIndexOf('/') + 1);
        const dotIndex = baseFilename.lastIndexOf('.');
        if (dotIndex !== -1) {
            const prefix = baseFilename.substring(0, dotIndex);
            const ext = baseFilename.substring(dotIndex);
            if (filename.startsWith(prefix + '.') && filename.endsWith(ext)) {
                hash = filename.substring(prefix.length + 1, filename.length - ext.length);
            }
        }
    }

    const query = hash ? `?v=${hash}` : '';
    return {
        ...staticImage,
        src: `https://res.cloudinary.com/dzyenrmzb/image/upload/${optimization}pointab-assets/${relativePath}${query}`
    };
};

export const images = {
    Landing1: mapToCloudinary(Landing1, "assets/images/home/landing1.svg"),
    Landing2: mapToCloudinary(Landing2, "assets/images/home/landing2.svg"),
    Landing3: mapToCloudinary(Landing3, "assets/images/home/landing3.jpg"),
    Landing4: mapToCloudinary(Landing4, "assets/images/home/landing4.svg"),
    Landing5: mapToCloudinary(Landing5, "assets/images/home/landing5.svg"),
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
    contactCard: mapToCloudinary(contactCard, "assets/images/contacts/card.svg"),

    iPhone2: mapToCloudinary(iPhone2, "assets/images/iPhone2.svg"),
    iPhone3: mapToCloudinary(iPhone3, "assets/images/iPhone3.svg"),

    //how its works
    hiw1: mapToCloudinary(hiw1, "assets/images/howitworks/step1.svg"),
    hiw2: mapToCloudinary(hiw2, "assets/images/howitworks/step2.svg"),
    hiw3: mapToCloudinary(hiw3, "assets/images/howitworks/step3.svg"),
    hiw4: mapToCloudinary(hiw4, "assets/images/howitworks/step4.svg"),

    world: mapToCloudinary(world, "assets/images/aboutUs/world.svg"),
    milestoneIcon: mapToCloudinary(milestoneIcon, "assets/icons/tick.svg"),
    moreThanJust: moreThanJust,
    moreThan1: morethan1,
    moreThan1Background: morethan1Background,
    moreThan2: morethan2,
    moreThan3: morethan3,
    moreThan4: morethan4,
    aboutHero: mapToCloudinary(aboutHero, "assets/images/aboutUs/aboutHero.svg"),
    ourMission: mapToCloudinary(ourMission, "assets/images/aboutUs/ourMission.svg"),
    ourValue1: mapToCloudinary(ourValue1, "assets/images/aboutUs/ourValue1.svg"),
    ourValue2: mapToCloudinary(ourValue2, "assets/images/aboutUs/ourValue2.svg"),
    ourValue3: mapToCloudinary(ourValue3, "assets/images/aboutUs/ourValue3.svg"),
    ourValue4: mapToCloudinary(ourValue4, "assets/images/aboutUs/ourValue4.svg"),
    team1: mapToCloudinary(team1, "assets/images/aboutUs/team1.png"),
    team2: mapToCloudinary(team2, "assets/images/aboutUs/team2.png"),
    team3: mapToCloudinary(team3, "assets/images/aboutUs/team3.png"),
    team4: mapToCloudinary(team4, "assets/images/aboutUs/team4.png"),
    team5: mapToCloudinary(team5, "assets/images/aboutUs/team5.png"),
    team6: mapToCloudinary(team6, "assets/images/aboutUs/team6.png"),
    serviceHero: mapToCloudinary(serviceHero, "assets/images/services/serviceHero.svg"),
    foodDelivery: mapToCloudinary(foodDelivery, "assets/images/services/food_delivery.png"),
    packageDelivery: mapToCloudinary(packageDelivery, "assets/images/services/package_delivery.png"),
    merchantFulfillment: mapToCloudinary(merchantFulfillment, "assets/images/services/merchant_fulfillment.png"),
    sameDay: mapToCloudinary(sameDay, "assets/images/services/same_day.png"),
    smeLogistics: mapToCloudinary(smeLogistics, "assets/images/services/sme_logistics.png"),
    whyChoose: mapToCloudinary(whyChoose, "assets/images/services/whyChoose.svg"),
    whyChoose2: mapToCloudinary(whyChoose2, "assets/images/services/whyChoose2.svg"),
    whyChoose3: mapToCloudinary(whyChoose3, "assets/images/services/whyChoose3.svg"),
    whyChoose4: mapToCloudinary(whyChoose4, "assets/images/services/whyChoose4.svg"),
}

export const icons = {
    GooglePlay: mapToCloudinary(GooglePlay, "assets/icons/google.svg"),
    AppStore: mapToCloudinary(AppStore, "assets/icons/apple.svg"),
    MessageIcon: mapToCloudinary(MessageIcon, "assets/icons/message.jpg"),

    //brands
    Nine1: mapToCloudinary(Nine1, "assets/icons/brands/91.jpg"),
    blaiz: mapToCloudinary(blaiz, "assets/icons/brands/blaiz.jpg"),
    clara: mapToCloudinary(clara, "assets/icons/brands/clara.jpg"),
    tuyaupay: mapToCloudinary(tuyaupay, "assets/icons/brands/tuyaupay.jpg"),
}