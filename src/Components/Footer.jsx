


export const Footer = () => {
    return (
        <>
            <footer className="2xl:px-40 xl:px-20 md:px-10 sm:px-6 px-4 py-3 bg-black text-white">

                {/* ---- TOP: NAV + SOCIAL ---- */}
                <div className="flex flex-col md:flex-row items-center justify-between md:gap-6 gap-3">

                    {/* NAV LINKS */}
                    <nav className="flex md:gap-10 gap-4 justify-center items-center">
                        <a href="/" className="hover:text-white transition">Home</a>
                        <a href="#about" className="hover:text-white transition">About</a>
                        <a href="#project" className="hover:text-white transition">Projects</a>
                        <a href="#contact" className="hover:text-white transition">Contact</a>
                    </nav>

                    {/* SOCIAL ICONS */}
                    <div className="flex md:gap-6 gap-3">
                        <a href="https://github.com/Jpawar23" target="_blank"
                            rel="noopener noreferrer">
                            <svg className="md:w-10 md:h-10 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .5C5.649.5.5 5.65.5 12c0 5.086 3.292 9.386 7.868 10.907.575.106.786-.25.786-.556 0-.274-.01-1.165-.015-2.112-3.2.696-3.878-1.372-3.878-1.372-.523-1.328-1.278-1.681-1.278-1.681-1.045-.715.079-.7.079-.7 1.155.082 1.764 1.186 1.764 1.186 1.028 1.763 2.696 1.253 3.353.957.103-.744.402-1.253.732-1.542-2.553-.291-5.237-1.276-5.237-5.682 0-1.255.45-2.282 1.186-3.085-.118-.29-.515-1.458.113-3.041 0 0 .968-.31 3.17 1.18A10.93 10.93 0 0112 6.8c.982.005 1.972.133 2.895.39 2.2-1.49 3.167-1.18 3.167-1.18.63 1.583.233 2.751.115 3.041.74.803 1.185 1.83 1.185 3.085 0 4.42-2.69 5.388-5.255 5.673.413.356.78 1.06.78 2.137 0 1.544-.014 2.785-.014 3.162 0 .309.207.669.793.554C20.212 21.38 23.5 17.08 23.5 12 23.5 5.65 18.351.5 12 .5z" />
                            </svg>                     </a>

                        <a href="https://www.linkedin.com/in/juhi-pawar-65471a206" rel="noopener noreferrer">
                            <svg className="md:w-10 md:h-10 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.98 3.5C3.87 3.5 3 4.37 3 5.48c0 1.1.87 1.98 1.98 1.98h.02C6.1 7.46 7 6.58 7 5.48 7 4.37 6.13 3.5 5.02 3.5h-.04zM3.5 8.75h3v12h-3v-12zm7.09 0h2.88v1.64h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.62v7.3h-3v-6.46c0-1.54-.03-3.52-2.15-3.52-2.15 0-2.48 1.67-2.48 3.41v6.57h-3v-12z" />
                            </svg>
                        </a>

                        <a href="mailto:jpawar0411@gmail.com" >
                            <svg className="md:w-10 md:h-10 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* ---- COPYRIGHT ---- */}
                <div>
                    <p className=" md:text-sm text-xs md:mt-6 mt-2 font-inter text-center ">
                        © {new Date().getFullYear()} JuhiPawar — Designed & Built by Me.
                    </p>
                </div>
            </footer>
        </>
    );
};
