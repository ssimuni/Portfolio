import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_abs88mg', 'template_o6tsfa4', form.current, {
                publicKey: 'hmWy6d-pKmmigD7id',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [1000])

    return (

        <div id='contact'>
            <div className="my-16 flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>

            <div id='Contact' className='text-black dark:bg-slate-900 dark:text-white p-4 lg:p-20 flex flex-col items-center justify-center'>
                <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Contact Me</h1>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-2 lg:w-1/2'>
                    <div className=' dark:text-slate-500 lg:flex gap-6'>
                        <input type="text" name="from_name" className='bg-transparent text-white w-full my-3 rounded-lg p-4 border-2 border-fuchsia-800 border-glow text-xl ' placeholder='Enter Your Full Name' required />
                        <input type="email" name="from_email" className='bg-transparent text-white w-full my-3 rounded-lg p-4 border-2 border-fuchsia-800 border-glow text-xl ' placeholder='Enter Your Email' required />
                    </div>
                    <textarea name="message" className='text-white w-full my-3 rounded-lg bg-transparent p-4 border-2 border-fuchsia-800 border-glow text-xl' placeholder='Enter Your Message...' cols="20" rows="10" required ></textarea>
                    <button
                        className='nano-button my-3 shadow-xl hover:shadow-fuchsia-800/50 text-white dark:text-white  border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden border-glow'
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
