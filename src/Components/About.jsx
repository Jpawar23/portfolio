// export const About = () => {
//     return (
//         <>
//             <div className="2xl:px-40 xl:px-20 md:px-10 sm:px-6 px-4 2xl:py-12 xl:py-10 md:py-8 sm:py-6 py-4">
//                 <div className="flex flex-col justify-center items-center">
//                     <h1 className="text-4xl font-semibold text-gray-900 uppercase font-primary">about</h1>



//                     <p className="text-base 2xl:mt-8 leading-relaxed font-inter text-gray-700">Hi, I’m a Frontend Developer and Web Developer with 1+ years of experience.
//                         I specialize in creating fast, responsive, and user-friendly web interfaces using HTML, CSS, JavaScript, React, and Astro. I focus on writing clean, scalable code and building modern UI that feels smooth, consistent, and intuitive.

//                         I’m also exploring backend development, aiming to grow into a more complete full-stack workflow.
//                         Whether it’s building interactive components, optimizing performance, or crafting seamless user experiences, I enjoy turning ideas into beautiful and functional digital products.</p>
//                 </div>

//                 <div className="mt-8">
//                     <h3 className="font-primary text-3xl font-semibold">Skills</h3>

//                     <ul className="mt-6 flex flex-col gap-3">
//                         <li className="text-lg font-inter font-normal text-gray-700">
//                             <span className="text-gray-800 font-medium font-primary text-xl ">Frontend:</span> HTML, CSS, JavaScript, React, Astro

//                         </li>

//                         <li className="text-lg font-inter font-normal text-gray-700">
//                             <span className="text-gray-800 font-medium font-primary text-xl"> Core Focus: </span> Clean + scalable code, modern UI, responsive layouts

//                         </li>
//                         <li className="text-lg font-inter font-normal text-gray-700">
//                             <span className="text-gray-800 font-medium font-primary text-xl">Exploring: </span> Backend development

//                         </li>

//                     </ul>




//                 </div>
//             </div>
//         </>
//     )
// }

import aboutImg from "../assets/image/about3.png";

export const About = () => {
    return (
        <>
            <div id="about" className="2xl:px-40 xl:px-20 md:px-10 sm:px-6 px-4 2xl:py-12 xl:py-10 md:py-8 sm:py-6 py-4">
                <h1 className="text-4xl font-semibold text-gray-900 uppercase font-primary text-center">
                    About Me
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-12">

                    <div className="lg:col-span-6">
                        <p className="text-base leading-relaxed font-inter text-gray-700">
                            Hi, I’m a Frontend Developer and Web Developer with 1+ years of
                            experience. I specialize in creating fast, responsive, and
                            user-friendly web interfaces using HTML, CSS, JavaScript, React,
                            and Astro. I focus on writing clean, scalable code and building
                            modern UI that feels smooth, consistent, and intuitive.
                            <br />
                            <br />
                            I’m also exploring backend development, aiming to grow into a more
                            complete full-stack workflow. Whether it’s building interactive
                            components, optimizing performance, or crafting seamless user
                            experiences, I enjoy turning ideas into beautiful and functional
                            digital products.
                        </p>

                        {/* SKILLS */}
                        <div className="mt-12">
                            <h3 className="font-primary text-3xl font-semibold">Skills</h3>

                            <ul className="mt-6 flex flex-col gap-3 text-lg">
                                <li className="font-inter text-gray-700">
                                    <span className="text-gray-900 font-primary font-medium text-xl">
                                        Frontend:
                                    </span>{" "}
                                    HTML, CSS, JavaScript, React, Astro
                                </li>

                                <li className="font-inter text-gray-700">
                                    <span className="text-gray-900 font-primary font-medium text-xl">
                                        Core Focus:
                                    </span>{" "}
                                    Clean + scalable code, modern UI, responsive layouts
                                </li>

                                <li className="font-inter text-gray-700">
                                    <span className="text-gray-900 font-primary font-medium text-xl">
                                        Exploring:
                                    </span>{" "}
                                    Backend development
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-6 flex justify-center">
                        <img
                            src={aboutImg}
                            alt="Developer Workspace"
                            className="rounded-xl w-[70%] h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
