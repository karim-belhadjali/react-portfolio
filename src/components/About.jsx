import React from 'react';

import ME from '../assets/images/me-about.jpg'

import { FaAward, FaUsers } from 'react-icons/fa'
import { MdLibraryBooks } from 'react-icons/md'

function About() {
    return (<section id="about" className='container text-center overflow-visible h-max mb-5  mt-20
    sm:mt-20'>
        <h5 className='dark:text-light pb-3'>Get To Know</h5>
        <h2 className='text-3xl pb-3 font-semibold dark:text-primary'>About Me</h2>

        <div className="container overflow-visible flex gap-28 mt-14 px-[10%]  1xl:px-[15%] xl:px-[10%] 
        lg:flex-col lg:gap-5">


            <img src={ME} className='w-[22rem] h-96 rounded-3xl
                     rotate-12 transition duration-300 hover:rotate-0 overflow-visible my-auto
                     dark:bg-transparent
                     lg:m-auto lg:mt-8 lg:mr-auto lg:mb-16 lg:col-start-1 sm:w-64' alt="About me" />

            <div className='text-start h-full overflow-visible'>
                <div className='flex flex-wrap gap-5 lg:gap-5  sm:gap-4 overflow-visible'>
                    <article className='card flex-1'>
                        <FaAward className='m-auto text-lg mb-4 dark:text-primary' />
                        <h5 className='text-sm font-semibold'>Experience</h5>
                        <small className='text-sm dark:text-light'>3+ Years Working</small>
                    </article>
                    <article className="card  flex-1">
                        <FaUsers className='m-auto text-lg mb-4 dark:text-primary' />
                        <h5 className='text-sm font-semibold'>Experience</h5>
                        <small className='text-sm dark:text-light'>3+ Years Working</small>
                    </article>
                    <article className='card  flex-1'>
                        <MdLibraryBooks className='m-auto text-lg mb-4 dark:text-primary' />
                        <h5 className='text-sm font-semibold'>Experience</h5>
                        <small className='text-sm dark:text-light'>3+ Years Working</small>
                    </article>
                </div>

                <p className='mt-5 mb-5 ml-1 content-evenly dark:text-light lg:mt4 lg:mr-0 lg:mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eligendi voluptatibus inventore ipsa placeat nam. Veritatis error numquam suscipit dolor mollitia, optio, rem molestias
                    totam voluptas natus quia, asperiores cum.</p>
                <a href="#contact" className='btn btn-primary '> Let's talk</a>
            </div>
        </div>
    </section >);
}

export default About;