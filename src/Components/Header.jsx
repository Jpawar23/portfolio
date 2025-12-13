export const Header = () => {
    return (
        <header className="2xl:px-40 xl:px-20 md:px-10 sm:px-6 px-4 py-6 bg-white text-black">
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
    );
};
