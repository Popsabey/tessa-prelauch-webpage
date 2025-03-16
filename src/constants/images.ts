import interconImg from "@/app/assets/images/Intercom.png";
import zendeskiMG from "@/app/assets/images/zendesk.png";
import radialGradient from "@/app/assets/images/Vector.png";
import cable from "@/app/assets/images/cable.png";
import citationsy from "@/app/assets/images/citationsy.png";
import miminum from "@/app/assets/images/minimun.png";
import packfleet from "@/app/assets/images/packfleet.png";
import rebank from "@/app/assets/images/rebank.png";
import hypermile from "@/app/assets/images/hypermile.png";
import trainedBYImg from "@/app/assets/images/trainedBYImg.png";
import availabImg from "@/app/assets/images/availabImg.png";
import nocodeImg from "@/app/assets/images/nocodeImg.png";
import NetConfIcon from "@/app/assets/images/NetConfIcon.png";
import logo from "@/app/assets/images/tessa-logo.svg";
import logo2 from "@/app/assets/images/Tessa.svg";
import HowIcon2 from "@/app/assets/images/Container Settings Icon.png";
import HowIcon3 from "@/app/assets/images/div.framer-1kce91c.png";

export const images = {
  image: {
    logo,
    logo2,
    zendeskiMG,
    interconImg,
    radialGradient,
    cable,
    miminum,
    packfleet,
    rebank,
    hypermile,
    citationsy,
    trainedBYImg,
    availabImg,
    nocodeImg,
    NetConfIcon,
    HowIcon2,
    HowIcon3,
  },
} as const;
export type ImageAssets = typeof images;
