import React from 'react';

import { BsFillPatchCheckFill } from 'react-icons/bs'
import ExpItem from './items/ExperienceItem';

function Experience() {
    return (<section id="experience" className='container text-center pt-20 h-screen lg:h-[80vh] pb-16
     md:h-max lg:px-14 xs:px-0'>
        <h5 className='dark:text-light pb-3'> What skills i have</h5>
        <h2 className='text-3xl pb-3 font-semibold dark:text-primary'>My Experience</h2>

        <div className='container grid grid-cols-8 gap-8  pt-16 lg:grid-cols-2 md:grid-cols-1  xs:mx-0'>
            <div className='col-start-2  dark:bg-bgvariant py-9 px-10 rounded-4xl border border-solid dark:border-transparent col-span-3
              dark:hover:bg-transparent  dark:hover:border-primaryvariant hover:cursor-default transition duration-300
              lg:col-span-1 xs:' >
                <h3 className='dark:text-primary font-semibold pb-5'>FrontEnd Development</h3>
                <div className='grid  grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-20 xs:gap-5'>
                    <ExpItem />
                    <ExpItem />
                    <ExpItem />
                    <ExpItem />
                    <ExpItem />
                    <ExpItem />
                </div>
            </div>
            <div className='dark:bg-bgvariant py-9 px-10 rounded-4xl border border-solid border-transparent  
            dark:hover:bg-transparent dark:hover:border-primaryvariant hover:cursor-default  col-span-3 transition duration-300
            lg:col-span-1 '>
                <h3 className='dark:text-primary font-semibold pb-5'>Backend Development</h3>
                <div className=' grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-20 xs:gap-5' >
                    <ExpItem />
                    <ExpItem />
                    <ExpItem />
                    <ExpItem />
                    <ExpItem />
                </div>
            </div>
        </div>
    </section >);
}

export default Experience;