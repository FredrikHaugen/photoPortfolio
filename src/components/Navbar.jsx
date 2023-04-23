import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
    const [visible, setVisible] = useState(true);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight * 0.8;
            const offset = window.pageYOffset;
            const scrollDown = offset > prevScrollY.current;

            if (scrollDown && visible) {
                setVisible(false);
            }

            if (!scrollDown && !visible && offset < threshold) {
                setVisible(true);
            }

            prevScrollY.current = offset;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [visible]);

    useEffect(() => {
        let timeoutId;

        if (!visible) {
            timeoutId = setTimeout(() => {
                setVisible(false);
            }, 2000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [visible]);

    return (
        <nav
            className="fixed w-full top-0 transition-opacity duration-500"
        >
            <div className="bg-white h-[5vh] flex items-center md:px-5 overflow-hidden">
                <h1 className="text-medium pl-3 md:text-large lg:text-2xl font-sans justify-start">
                    Name
                </h1>
                <div className="flex justify-end w-full">
                    <Link
                        to="HeroSection"
                        smooth={true}
                        duration={500}
                        className="py-6 px-2 md:px-4 lg:px-5 h-full hover:bg-soft-pink hover:bg-opacity-50 hover:cursor-pointer ease-in-out duration-500 text-xs md:text-m lg:text-lg"
                    >
                        Home
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="py-6 px-2 md:px-4 lg:px-5 h-full hover:bg-soft-pink hover:cursor-pointer hover:bg-opacity-50 ease-in-out duration-500 text-xs md:text-l lg:text-lg"
                    >
                        About
                    </Link>

                    <Link
                        to="portfolio"
                        smooth={true}
                        duration={500}
                        className="py-6 px-2 md:px-4 lg:px-5 h-full hover:bg-soft-pink hover:cursor-pointer hover:bg-opacity-50 ease-in-out duration-500 text-xs md:text-l lg:text-lg"
                    >
                        Portfolio
                    </Link>
                    <Link
                        to="socials"
                        smooth={true}
                        duration={500}
                        className="py-6 px-2 md:px-4 lg:px-5 h-full hover:bg-soft-pink hover:cursor-pointer hover:bg-opacity-50 ease-in-out duration-500 text-xs md:text-l lg:text-lg"
                    >
                        Socials
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="py-6 px-2 md:px-4 lg:px-5 h-full hover:bg-soft-pink hover:cursor-pointer hover:bg-opacity-50 ease-in-out duration-500 text-xs md:text-l lg:text-lg"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
