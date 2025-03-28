"use client"

const WhatOurCustSays = () => {
    return (
        <div className="w-full bg-black justify-center items-center flex flex-col gap-14 lg:my-24 mt-10 py-10 px-4 sm:px-5 md:px-20 lg:px-48">
            <h1 className="font-normal xl:text-4xl lg:text-3xl md:text-3xl text-xl font-geist-medieum mx-auto text-white text-center">
                What our customers have to say
            </h1>

            <div className="w-full overflow-x-auto flex gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="flex-shrink-0 w-80 flex flex-col justify-start items-start py-10 px-8 gap-6 bg-[#171717] rounded-2xl">
                        <p className="font-medium font-geist-medieum text-sm text-[#FFFFFF]">
                            Customer support is something we take quite seriously at Colorprinter, and we get plenty of these texts from our socials and email. AI-Gent is a lifesaver for us—very adequate and for a quarter of the price a person performing similar roles will take. <br /> <br />Highly recommended.
                        </p>
                        <div className="flex-row flex gap-3 justify-center items-center">
                            <div className="w-14 h-14 rounded-full bg-gray-500/20"></div>
                            <div className="flex flex-col gap-0.5">
                                <h4 className="font-medium font-geist-medieum text-[16px] text-[#FFFFFF]">Manuel Carlos</h4>
                                <p className="text-xs font-normal font-geist-regular text-[#FFFFFF]">Owner at <span className="text-[#FFA287]">Colorprinter</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatOurCustSays;
