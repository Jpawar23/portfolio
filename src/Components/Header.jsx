import { useState } from "react";

export const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className="xl:block hidden 2xl:px-40 xl:px-20 md:px-10 sm:px-6 px-4 py-6 bg-white text-black">
                <div className="flex justify-between items-center">
                    <div></div>

                    <nav className="flex gap-6 text-xl font-medium">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#project">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>

                    <button onClick={() => window.open('/JuhiPawar_cv.pdf')} className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition">
                        Download Resume
                    </button>
                </div>
            </header>


            <header className="xl:hidden block justify-between items-center px-4 py-4 bg-white">

                <button className="" onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#000000"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" /></svg>                </button>
            </header>
        </>
    );
};


