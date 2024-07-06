import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import { MdDownload } from "react-icons/md";

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [1000])


    return (
        <div>
            <div className="my-16 flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>

            <div id='About' className=' dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>


                <img data-aos='fade-down' src="/footer.jpg" alt="" className='rounded border-2 p-1 h-80 w-96 border-fuchsia-500 img_glow' />

                <div className='h-full lg:py-20 flex flex-col justify-center lg:items-start items-center'>
                    <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase'>
                        About Me
                    </h1>
                    <p data-aos='fade-left '>
                        Hello, I'm Sayma Siddiqua Simu, a passionate front-end developer dedicated to building innovative web applications. Currently, I'm pursuing my graduation from the University of Chittagong with a specialization in Computer Science and Engineering.
                        <br></br>
                        In my journey as a web developer, I have gained proficiency in HTML, CSS, JavaScript, React, Tailwind, Firebase, and MongoDB. Additionally, I have hands-on experience with Android Studio, which has broadened my understanding of mobile development. I'm always eager to learn and expand my skill set to keep up with the ever-evolving tech landscape.
                        <br></br>
                        I thrive on challenges and enjoy contributing to projects that push the boundaries of technology. My goal is to leverage my comprehensive skill set to contribute to innovative projects in the dynamic field of web development.
                        <br></br>
                        When I'm not immersed in coding, you can find me exploring new locations for an outing, hiking through nature trails, or experimenting with new recipes in my kitchen. I believe in maintaining a work-life balance and strive to lead a healthy lifestyle.
                        <br></br>
                        I look forward to connecting and collaborating with like-minded professionals who share my passion for technology and innovation.
                    </p>
                    <Link className="mt-5 flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-800 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href=""
                    >
                        <span>Get Resume</span>
                        <MdDownload size={16} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About