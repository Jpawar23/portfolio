export const Home = () => {
    const handlescroll = () => {
        document.getElementById("project").scrollIntoView({
            behavior: "smooth"
        })
    }
    return (
        <>
            <section class=" flex items-center justify-center text-center 2xl:px-40 xl:px-20 md:px-10 sm:px-6 px-4 2xl:py-16 xl:py-10 md:py-8 sm:py-6 py-4">
                <div class="max-w-3xl mx-auto">
                    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                        Hi, I'm Juhi — <span class="text-blue-600">Front-End Developer</span>
                    </h1>

                    <p class="mt-4 text-lg sm:text-xl text-gray-600">
                        I design and develop modern interfaces for the web.
                    </p>

                    <button onClick={handlescroll} class="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition">
                        View My Work
                    </button>

                </div>
            </section>

        </>
    )
}
