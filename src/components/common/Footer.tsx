import { images } from "@/constants/images";
import Image from "next/image";


const Footer = () => {
    return (
        <div className="max-w-5xl w-[80%] mx-auto p-4 md:p-6 lg:p-8 text-center gap-4 flex flex-col">

            <div className=" flex flex-row justify-between items-center">
                <Image src={images.image.logo} alt="Tessa" className="w-20 h-10" />
                <a href="mailto:tessahq247@gmail.com" className=" mb-3 md:mb-4 lg:mb-5 text-[#FFFFFF]">
                    Send us a mail
                </a>
            </div>
            <div
                className=" flex flex-col"> <p className=" text-[#747474] font-geist-medieum text-sm text-center">Tessa is a product of CruseTech Solutions</p>
                <p className="text-xs md:text-sm lg:text-base text-[#747474]">
                    Copyright © Team Tessa  2025
                </p></div>
        </div>
    );
};

export default Footer;
