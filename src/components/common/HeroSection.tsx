"use client"

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

            <div className="flex flex-col justify-center items-center w-full px-4 xl:max-w-5xl mx-auto flex-grow mt-10 md:mt-16 lg:mt-20">
                <div className="bg-[#171717] rounded-full py-2 px-4">
                    <h4 className="font-normal font-geist-regular text-center text-white text-[10px] sm:text-base w-full">
                        Tessa resolves 80% of support enquiries without a human agent
                    </h4>
                </div>

                <div className="w-full max-w-[690px] flex flex-col gap-4 sm:gap-7 mt-6">
                    <h1 className="font-geist-regular font-bold sm:font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight sm:leading-[67.2px] text-white text-center">
                        <span className="text-gold1">AI-powered</span> support<br />
                        agent, delivering<br />
                        24/7 efficiency
                    </h1>

                    <p className="text-sm sm:text-base w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] font-light font-geist-regular leading-relaxed text-center text-white mx-auto">
                        Improve your existing support systems li with Tessa&apos;s AI capabilities,
                        Tessa works with tools like Intercom to deliver human-like services.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2.5 mx-auto">
                        <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSdNBeitJRZsqzcreqwKVmll6ydZNOjZ0pVJa1M5-f1fgC0VTw/viewform"} 
                              className="h-[48px] w-[332px] sm:h-[48px] sm:w-[332px] md:h-[48px] md:w-[300px] lg:h-[48px] lg:w-[310px] z-20 bg-btnBlue rounded-sm text-white text-sm sm:text-base flex items-center justify-center">
                            Pre-subscribe (60% discount)
                        </Link>
                        <Link href={"https://forms.gle/qqLkBuZXX8PZTZiTA"} 
                              className="h-[48px] w-[332px] sm:h-[48px] sm:w-[332px] md:h-[48px] md:w-[300px] lg:h-[48px] lg:w-[310px] z-20 cursor-pointer bg-transparent border border-white/50 text-white rounded-sm text-sm sm:text-base flex items-center justify-center">
                            Know when we public-launch
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 sm:gap-4 justify-center items-center mx-auto w-full max-w-[90%] sm:max-w-[80%] py-6 sm:py-8">
                <h3 className="font-geist-regular text-base sm:text-base leading-6 sm:leading-7 text-center text-white/60">
                    Smart teams trust Tessa
                </h3>
                <p className="text-white/90 text-center text-base sm:text-base font-semibold">
                    Why spend so much on support when you can automate it to increase efficiency with reduced cost
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
