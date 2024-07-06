import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (

        <div>

            <div className="my-16 flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>
            <h1 data-aos='fade-right' className='text-[52px] text-center font-semibold mb-8 leading-normal text-fuchsia-500 uppercase'>
                Education and Certificates
            </h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                className='w-full flex justify-center mx-auto  lgl:flex-row gap-20 lgl:gap-20'
            >

                {/* part one */}
                <div>
                    <div className='mx-auto text-center py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
                        <p className='text-sm text-designColor tracking-[4px]'>
                            2016 - Running
                        </p>
                        <h2 className='text-3xl text-fuchsia-500 md:text-4xl font-bold mb-10'>
                            Education Quality
                        </h2>
                    </div>
                    <div className='mt-6 mx-auto items-center justify-center lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-[#ce47c1] border-opacity-30 flex flex-col gap-14'>
                        <ResumeCard
                            title='BSc in Computer Science'
                            subTitle='University of Chittagong (2020 - Running)'
                            percentage='3.60/4 Currently'
                            description='The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.'
                        />
                        <ResumeCard
                            title='Higer Secondary School Education'
                            subTitle='Hazi Mohammad Mohsin College (2018 - 2019)'
                            percentage='4.89/5'
                            description='Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.'
                        />
                        <ResumeCard
                            title='Secondary School Education'
                            subTitle='Sitakund Girls High School (2016 - 2017)'
                            percentage='5.00/5'
                            description='Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.'
                        />
                    </div>
                </div>
            </motion.div>
        </div>

    );
};

export default Education;