import { images } from "@/constants/images";
import NavBar from "./NavBar";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="w-full bg-black flex flex-col min-h-screen relative">

            <NavBar />
            <Image
                src={images.image.radialGradient}
                loading="eager"
                alt=""
                className="w-full max-w-[1200px] absolute top-0 left-1/2 transform -translate-x-1/2 xl:translate-x-0 xl:left-[400px] lg:left-[350px]"
            />

            <div className="flex flex-col justify-center items-center w-full px-4 xl:max-w-5xl mx-auto flex-grow">

                <div className="bg-[#171717] rounded-full py-2 px-4">
                    <h4 className="font-normal font-geist-regular text-center text-white text-[10px] sm:text-base w-full">
                        Tessa resolves 80% of support enquiries without a human agent
                    </h4>
                </div>

                <div className="w-full max-w-[690px] flex flex-col gap-4 sm:gap-7 mt-6">
                    <h1 className="font-geist-regular font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight sm:leading-[67.2px] text-white text-center">
                        <span className="text-gold1">AI-powered</span> support agent, delivering 24/7 efficiency
                    </h1>

                    <p className="text-sm sm:text-base w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] font-light font-geist-regular leading-relaxed text-center text-white mx-auto">
                        Improve your existing support systems with Tessa&apos;s AI capabilities,
                        delivering human-like customer support services.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2.5 mx-auto">
                        <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSdNBeitJRZsqzcreqwKVmll6ydZNOjZ0pVJa1M5-f1fgC0VTw/viewform"} className="py-2 z-20 px-5 sm:py-3 sm:px-6 bg-btnBlue rounded-sm text-white text-sm sm:text-base">
                            Pre-subscribe (60% discount)
                        </Link>
                        <Link href={"https://forms.gle/qqLkBuZXX8PZTZiTA"} className=" z-20 cursor-pointer py-2 px-5 sm:py-3 sm:px-6 bg-transparent border border-white/50 text-white rounded-sm text-sm sm:text-base">
                            Know when we public-launch
                        </Link>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-a4 sm:gap-8 justify-between items-center mx-auto w-full max-w-[90%] sm:max-w-[80%] py-8 sm:py-10">
                <h3 className="font-geist-medium text-sm sm:text-lg leading-6 sm:leading-7 text-center text-white/40">
                    Smart teams trust Tessa
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-12">
                    <Image src={images.image.rebank} alt="Rebank" className="w-16 sm:w-20 h-auto" />
                    <Image src={images.image.packfleet} alt="Packfleet" className="w-16 sm:w-20 h-auto" />
                    <Image src={images.image.cable} alt="Cable" className="w-16 sm:w-20 h-auto" />
                    <Image src={images.image.hypermile} alt="Hypermile" className="w-16 sm:w-20 h-auto" />
                    <Image src={images.image.citationsy} alt="Citationsy" className="w-16 sm:w-20 h-auto" />
                    <Image src={images.image.miminum} alt="Minimum" className="w-16 sm:w-20 h-auto" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
