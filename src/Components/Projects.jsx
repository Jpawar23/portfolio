

import image from '../../src/assets/image/aboutimg1.png';
import image1 from '../../src/assets/image/project1.png';
export const Projects = () => {
    return (
        <>
            <div id='project' className="2xl:px-40 xl:px-20 md:px-10 sm:px-6 px-4 2xl:py-12 xl:py-10 md:py-8 sm:py-6 py-4">
                <h1 className="text-4xl font-semibold text-gray-900 uppercase font-primary text-center">
                    Projects
                </h1>
                {/* project1 */}
                <div className='grid grid-cols-3 gap-6 mt-12'>
                    <div className='border rounded-xl overflow-hidden bg-white'>
                        <img src={image} alt="" className='h-56 w-full object-cover' />
                        <div className='px-6 pt-2 pb-4'>
                            <h3 className='font-primary text-2xl font-semibold uppercase text-gray-900'>Attendance Dashboard</h3>
                            <p className='font-inter text-base font-normal mt-3 text-gray-700'>Real-time attendance dashboard tracking check-ins, check-outs, hours, and performance.</p>
                            <div className="flex flex-wrap gap-2 mt-4">
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

                            {/* <div className="mt-6 flex gap-4">
                                <a href="/" className="text-blue-600 font-medium hover:underline" target="_blank">
                                    Live Demo
                                </a>
                                <a href="/" className="text-blue-600 font-medium hover:underline" target="_blank">
                                    GitHub
                                </a>
                            </div> */}
                        </div>
                    </div>


                    {/* project2 */}
                    <div className='border rounded-xl overflow-hidden bg-white'>
                        <img src={image1} alt="" className='h-56 w-full object-cover' />
                        <div className='px-6 pt-2 pb-4'>
                            <h3 className='font-primary text-2xl font-semibold uppercase text-gray-900'>caballero's electric</h3>
                            <p className='font-inter text-base font-normal mt-3 text-gray-700'>Project description</p>
                            <div className="flex flex-wrap gap-2 mt-4">
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

                            {/* <div className="mt-6 flex gap-4">
                                <a href="/" className="text-blue-600 font-medium hover:underline" target="_blank">
                                    Live Demo
                                </a>
                                <a href="/" className="text-blue-600 font-medium hover:underline" target="_blank">
                                    GitHub
                                </a>
                            </div> */}
                        </div>
                    </div>

                    {/* project3 */}
                    <div className='border rounded-xl overflow-hidden bg-white'>
                        <img src={image} alt="" className='h-56 w-full object-cover' />
                        <div className='px-6 pt-2 pb-4'>
                            <h3 className='font-primary text-2xl font-semibold uppercase text-gray-900'>Motioncube Studio</h3>
                            <p className='font-inter text-base font-normal mt-3 text-gray-700'>Project description</p>
                            <div className="flex flex-wrap gap-2 mt-4">
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

                            {/* <div className="mt-6 flex gap-4">
                                <a href="/" className="text-blue-600 font-medium hover:underline" target="_blank">
                                    Live Demo
                                </a>
                                <a href="/" className="text-blue-600 font-medium hover:underline" target="_blank">
                                    GitHub
                                </a>
                            </div> */}
                        </div>
                    </div>

                    {/* project4 */}
                    <div className='border rounded-xl overflow-hidden bg-white'>
                        <img src={image} alt="" className='h-56 w-full object-cover' />
                        <div className='px-6 pt-2 pb-4'>
                            <h3 className='font-primary text-2xl font-semibold uppercase text-gray-900'>Myna Ai</h3>
                            <p className='font-inter text-base font-normal mt-3 text-gray-700'>Project description</p>
                            <div className="flex flex-wrap gap-2 mt-4">
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

                            {/* <div className="mt-6 flex gap-4">
                                <a href="/" className="text-blue-600 font-medium hover:underline">
                                    Live Demo
                                </a>
                                <a href="/" className="text-blue-600 font-medium hover:underline">
                                    GitHub
                                </a>
                            </div> */}
                        </div>
                    </div>

                    {/* project5 */}

                </div>


            </div>
        </>
    )
}