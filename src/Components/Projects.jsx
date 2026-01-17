

import image from '../../src/assets/image/aboutimg1.png';
import image1 from '../../src/assets/image/project1.png';
export const Projects = () => {
    return (
        <>
            <div id='project' className="2xl:px-40 xl:px-20 md:px-10 sm:px-6 px-4 2xl:py-12 xl:py-10 md:py-8 sm:py-6 py-4">
                <h1 className="xl:text-4xl md:text-3xl text-2xl font-semibold text-gray-900 uppercase font-primary text-center">
                    Projects
                </h1>
                <div className='grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 2xl:gap-6 gap-4 xl:mt-12 sm:mt-6 mt-4'>
                    {/* project1 */}
                    <div className='border rounded-xl overflow-hidden bg-white'>
                        <img src={image} alt="" className='h-32 w-full object-cover' />
                        <div className='md:p-6 p-3'>
                            <h3 className='font-primary md:text-2xl text-xl font-semibold uppercase text-gray-900'>Attendance Dashboard</h3>
                            <p className='font-inter md:text-base text-sm font-normal md:mt-3 mt-1 text-gray-700'>Real-time attendance dashboard tracking check-ins, check-outs, hours, and performance.</p>
                            <div className="flex flex-wrap gap-2 md:mt-4 mt-2">
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    React Js
                                </span>
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    Tailwind Css
                                </span>
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    JavaScript
                                </span>
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    Node js
                                </span>
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    Mysql
                                </span>
                            </div>
                            <div className="flex flex-wrap justify-between md:mt-4 mt-2 ">
                                <p>Type: Client Project</p>

                            </div>

                        </div>
                    </div>

                    {/* project2 */}
                    <div className='border rounded-xl overflow-hidden bg-white'>
                        <img src={image1} alt="" className='h-32 w-full object-cover' />
                        <div className='px-6 pt-2 pb-4'>
                            <h3 className='font-primary md:text-2xl text-xl font-semibold uppercase text-gray-900'>caballero's electric</h3>
                            <p className='font-inter md:text-base text-sm font-normal md:mt-3 mt-1 text-gray-700'>Designed and developed a responsive client website using HTML, CSS, and JavaScript.
                                Focused on clean UI, cross-browser compatibility, and performance optimization.</p>
                            <div className="flex flex-wrap gap-2 md:mt-4 mt-2">
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    Html
                                </span>
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    Tailwind Css
                                </span>
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    Javascript
                                </span>
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    Gsap
                                </span>
                            </div>

                            <div className="flex flex-wrap justify-between md:mt-4 mt-2 ">
                                <p>Type: Client Project</p>
                                <a href='https://caballero-s-electric-website.web.app/' rel="noopener noreferrer" target='_blank' className='underline text-blue-700'>Live</a>

                            </div>


                        </div>
                    </div>

                    {/* project3 */}
                    <div className='border rounded-xl overflow-hidden bg-white'>
                        <img src={image} alt="" className='h-32 w-full object-cover' />
                        <div className='px-6 pt-2 pb-4'>
                            <h3 className='font-primary md:text-2xl text-xl font-semibold uppercase text-gray-900'>Motioncube Studio</h3>
                            <p className='font-inter md:text-base text-sm font-normal md:mt-3 mt-1 text-gray-700'>Built a fast, modern client website using Astro with component-based architecture.
                                Optimized for performance, SEO, and responsive design.</p>
                            <div className="flex flex-wrap gap-2 md:mt-4 mt-2">
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    Html
                                </span>
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    Tailwind Css
                                </span>
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    Javascript
                                </span>
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    Astro
                                </span>
                            </div>

                            <div className="flex flex-wrap justify-between md:mt-4 mt-2 ">
                                <p>Type: Client Project</p>
                                <a href=' https://motioncube-2025.web.app/' rel="noopener noreferrer" target='_blank' className='underline text-blue-700'>Live</a>

                            </div>
                        </div>
                    </div>

                    {/* project4 */}
                    <div className='border rounded-xl overflow-hidden bg-white'>
                        <img src={image} alt="" className='h-32 w-full object-cover' />
                        <div className='md:p-6 p-3'>
                            <h3 className='font-primary md:text-2xl text-xl font-semibold uppercase text-gray-900'>Myna Ai</h3>
                            <p className='font-inter md:text-base text-sm font-normal md:mt-3 mt-1 text-gray-700'>Developed a modern website using Astro with reusable components.
                                Improved page load speed, accessibility, and user experience.</p>
                            <div className="flex flex-wrap gap-2 md:mt-4 mt-2">
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    Astro
                                </span>
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    Html
                                </span>
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    Tailwind Css
                                </span>
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    Javascript
                                </span>
                            </div>
                            <div className="flex flex-wrap justify-between md:mt-4 mt-2 ">
                                <p>Type: Client Project</p>
                                <a href='https://myna.cx/' rel="noopener noreferrer" target='_blank' className='underline text-blue-700'>Live</a>

                            </div>

                        </div>
                    </div>

                    {/* project5 */}
                    <div className='border rounded-xl overflow-hidden bg-white'>
                        <img src={image} alt="" className='h-32 w-full object-cover' />
                        <div className='md:p-6 p-3'>
                            <h3 className='font-primary md:text-2xl text-xl font-semibold uppercase text-gray-900'>Admin File Managment Dashboard</h3>
                            <p className='font-inter md:text-base text-sm font-normal md:mt-3 mt-1 text-gray-700'>Developed a full-stack File Management System with secure authentication and file handling.
                                Built REST APIs and an admin dashboard.</p>
                            <div className="flex flex-wrap gap-2 md:mt-4 mt-2">
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    React Js
                                </span>
                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    Node Js
                                </span>

                                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                                    MongoDB
                                </span>
                            </div>




                            <div className="flex flex-wrap justify-between md:mt-4 mt-2 ">
                                <p>Type: Self Practice</p>
                                <a href="https://github.com/Jpawar23/admin-file-management-dashboard" rel="noopener noreferrer" target='_blank' className='underline text-blue-700'>GitHub</a>

                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}