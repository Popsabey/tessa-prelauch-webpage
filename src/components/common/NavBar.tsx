"use client"

import { images } from '@/constants/images';
import Image from 'next/image';

const NavBar = () => {
    const navLinks = [
        { href: "mailto:tessahq247@gmail.com", label: "Send us a mail" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 w-full backdrop-blur-sm z-50">
            <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto max-w-6xl py-4 md:py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Image src={images.image.logo} alt="Tessa Logo" className="w-24 h-10 text-white" />

                    {/* Navigation Links - Always Visible */}
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-white text-sm hover:text-white transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
