import aboutImg from "../assets/image/about3.png";

export const About = () => {
    return (
        <>
            <div id="about" className="2xl:px-40 xl:px-20 md:px-10 sm:px-6 px-4 2xl:py-12 xl:py-10 md:py-8 sm:py-6 py-4">
                <h1 className="xl:text-4xl md:text-3xl text-2xl font-semibold text-gray-900 uppercase font-primary text-center">
                    About Me
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 gap-6 items-center xl:mt-12 sm:mt-6 mt-4">
                    <div className="lg:col-span-6 col-span-1">
                        <p className="md:text-base text-sm leading-relaxed font-inter text-gray-700">
                            Hi, I’m a Frontend Developer and Web Developer with 1+ years of
                            experience. I specialize in creating fast, responsive, and
                            user-friendly web interfaces using HTML, CSS, JavaScript, React,
                            and Astro. I focus on writing clean, scalable code and building
                            modern UI that feels smooth, consistent, and intuitive.<br />
                            I’m also exploring backend development, aiming to grow into a more
                            complete full-stack workflow. Whether it’s building interactive
                            components, optimizing performance, or crafting seamless user
                            experiences, I enjoy turning ideas into beautiful and functional
                            digital products.
                        </p>
                        {/* SKILLS */}
                        <div className="2xl:mt-12 xl:mt-8 md:mt-6 mt-4">
                            <h3 className="font-primary xl:text-3xl sm:text-2xl text-2xl font-semibold">Skills</h3>
                            <ul className="md:mt-6 mt-2 flex flex-col md:gap-3 gap-2 text-lg">
                                <li className="font-inter text-gray-700">
                                    <span className="text-gray-900 font-primary font-medium md:text-xl text-lg">
                                        Frontend:
                                    </span>{" "}
                                    <sapn className="md:text-xl text-base"> HTML, CSS, JavaScript, React, Astro</sapn>
                                </li>
                                <li className="font-inter text-gray-700">
                                    <span className="text-gray-900 font-primary font-medium md:text-xl text-lg">
                                        Core Focus:
                                    </span>{" "}
                                    <span className="md:text-xl text-base">Clean + scalable code, modern UI, responsive layouts</span>
                                </li>
                                <li className="font-inter text-gray-700">
                                    <span className="text-gray-900 font-primary font-medium md:text-xl text-lg">
                                        Exploring:
                                    </span>{" "}
                                    <span className="md:text-xl text-base">Backend development</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="xl:block hidden lg:col-span-6 col-span-1 flex justify-center">
                        <img
                            src={aboutImg}
                            alt="Developer Workspace"
                            className="rounded-xl md:w-[70%] w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
