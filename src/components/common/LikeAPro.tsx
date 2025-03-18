import Link from "next/link";

const LikeAPro = () => {
    return (
        <section className="w-full bg-black flex items-center justify-center p-4">
            <div className="w-full xl:max-w-5xl lg:max-w-4xl md:max-w-3xl sm:max-w-2xl max-w-sm rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800">
                <div className="p-8 flex flex-col items-center gap-6">
                    <h2 className="text-2xl md:text-3xl font-medium text-white text-center">
                        Handle customer support{' '}
                        <span className="text-yellow-500 italic">like a pro</span>
                    </h2>

                    <p className="text-sm md:text-base text-zinc-400 text-center max-w-xl">
                        Integrate the most advanced customer support agent into your business/product, 
                        automate responses with a 24hrs coverage, saving you time & money.
                    </p>

                    <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSdNBeitJRZsqzcreqwKVmll6ydZNOjZ0pVJa1M5-f1fgC0VTw/viewform"} className="py-2 z-20 px-6 sm:py-3 sm:px-7 bg-btnBlue rounded-sm text-white text-sm sm:text-base">
                        Pre-subscribe (60% discount)
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LikeAPro;
