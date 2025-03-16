"use client"
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const KnowledgeBased = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const faqItems = [
        {
            question: "How will Tessa improve our support?",
            answer: "It automates up to 80% of customer inquiries, works 24/7, and reduces response time to seconds, all while cutting support costs. Your team can focus on high-value tasks instead of answering repetitive questions."
        },
        {
            question: "We already have a system, why change?",
            answer: "No change! Our AI agent integrates with existing tools like Intercom, Zendesk, Freshdesk, Zoho Desk etc. so you don’t have to change anything."
        },
        {
            question: "Why should I sign up for this before launch?",
            answer: "Early subscribers get exclusive benefits and special pricing that won't be available after launch.Our early adopters get an exclusive 60% discount and priority access to AI support automation. By signing up now, you lock in cost savings, gain early access to new features, and help shape the product to fit your business needs."
        },
        {
            question: "How do we setup Tessa for us?",
            answer: "Setup takes just a few minutes, simply connect it to your existing support platform, customize responses, and start automating. Our rep will assist you with any difficulty you have in setting up."
        },
        {
            question: "Is there any money-back guaranty?",
            answer: "We offer a risk-free prelaunch guaranty, early adopters will receive personalized onboarding, premium support, and a flexible opt-out option if Tessa isn’t suitable."
        }

    ];

    return (
        <section className="w-full min-h-fit mt-10 bg-black py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-white text-center mb-8 md:mb-12">
                    Knowledge base
                </h2>

                <div className="space-y-6">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 overflow-hidden transition-all duration-300 ${openItem === index ? 'rounded-2xl' : 'rounded-2xl'
                                }`}
                        >
                            <button
                                className="w-full p-6 flex items-center justify-between text-left text-white transition-colors"
                                onClick={() => setOpenItem(openItem === index ? null : index)}
                                aria-expanded={openItem === index}
                            >
                                <span className="text-sm md:text-base pr-4">{item.question}</span>
                                {openItem === index ? (
                                    <Minus className="w-5 h-5 flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openItem === index ? 'max-h-48' : 'max-h-0'
                                    }`}
                            >
                                <p className="px-6 pb-6 text-sm md:text-base text-zinc-400">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KnowledgeBased;