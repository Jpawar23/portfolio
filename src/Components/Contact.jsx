

export const Contact = () => {
    return (
        <section id="contact" className="2xl:px-40 xl:px-20 md:px-10 sm:px-6 px-4 2xl:py-16 xl:py-14 md:py-12 sm:py-10 py-8 bg-gray-50">
            <h2 className="xl:text-4xl md:text-3xl text-2xl font-semibold text-gray-900 uppercase font-primary text-center">
                Contact Me
            </h2>

            <p className="text-center text-gray-600 md:mt-4 mt-2 md:text-lg text-base font-inter max-w-2xl mx-auto">
                Feel free to reach out for collaboration, project work, or just a friendly chat.
            </p>

            <div className="xl:mt-12 sm:mt-6 mt-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                <div>
                    <div className="xl:block hidden">
                        <h3 className="text-3xl font-semibold text-gray-900 font-primary">
                            Let’s Connect
                        </h3>
                        <p className="text-gray-700 mt-4 font-inter leading-relaxed">
                            Whether you have a question or want to discuss a project,
                            I’m always open to new opportunities. Reach out anytime!
                        </p>
                    </div>

                    <ul className="md:mt-8 mt-2 md:space-y-4 space-y-2 xl:text-lg text-base">
                        <li className="flex items-center xl:gap-3 gap-2">
                            <span className="text-gray-900 font-medium xl:w-28">Email:</span>
                            <a href="mailto:jpawar0411@gmail.com" className="text-blue-700 underline">
                                jpawar0411@gmail.com
                            </a>
                        </li>

                        <li className="flex items-center xl:gap-3 gap-2">
                            <span className="text-gray-900 font-medium xl:w-28">Phone:</span>
                            <a href="tel:+919876543210" className="text-blue-700 underline">
                                +91 9399529704
                            </a>
                        </li>

                        <li className="flex items-center xl:gap-3 gap-2">
                            <span className="text-gray-900 font-medium xl:w-28">Location:</span>
                            <p className="text-blue-700 underline">Indore, India</p>
                        </li>

                        <li className="flex items-center xl:gap-3 gap-2">
                            <span className="text-gray-900 font-medium xl:w-28">LinkedIn:</span>
                            <a href="https://www.linkedin.com/in/juhi-pawar-65471a206" target="_blank"
                                rel="noopener noreferrer" className="text-blue-700 underline">
                                https://www.linkedin.com/in/juhi-pawar-65471a206
                            </a>
                        </li>

                        <li className="flex items-center gap-3">
                            <span className="text-gray-900 font-medium xl:w-28">GitHub:</span>
                            <a href="https://github.com/Jpawar23" target="_blank"
                                rel="noopener noreferrer" className="text-blue-700 underline">
                                https://github.com/Jpawar23
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="md:block hidden bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
                    <h3 className="text-2xl font-semibold text-gray-900 font-primary">
                        Quick Contact
                    </h3>

                    <p className="text-gray-600 mt-3">
                        I usually respond within a few hours.
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="p-4 bg-gray-100 rounded-xl">
                            <p className="text-gray-900 font-medium">Email</p>
                            <p className="text-gray-700 text-sm mt-1"> jpawar0411@gmail.com</p>
                        </div>

                        <div className="p-4 bg-gray-100 rounded-xl">
                            <p className="text-gray-900 font-medium">Phone</p>
                            <p className="text-gray-700 text-sm mt-1">+91 9399529704</p>
                        </div>

                        <div className="p-4 bg-gray-100 rounded-xl">
                            <p className="text-gray-900 font-medium">Location</p>
                            <p className="text-gray-700 text-sm mt-1">Indore, India</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};


