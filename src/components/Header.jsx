import React from 'react';

import CV from '../assets/images/cv.pdf'
import ME from '../assets/images/me.png'
import Mail from './links/Mail';
import Socials from './links/Socials';


function Header() {
    return (<header className='overflow-hidden h-screen  md:h-screen sm:h-screen 1md:text-center 1md:mt-20  md:mt-20 xs:h-full '>
        <section id='home'>

            < div className="container flex relative h-full  items-center gap-20 pl-[20%] 1xl:pl-[15%] xl:pl-[10%] 1md:flex-col 1md:mt-20 " >
                <div className='xs:h-max'>
                    < h5 className='pb-3 text-red-500 dark:text-primary'> Hi, my name is </h5>
                    < h1 className='text-3xl pb-3 font-bold' > Karim Bel Hadj Ali</h1 >
                    <h5 className='dark:text-light w-[500px] sm:w-full'>I'm a Full stack developer, I code beautifully simple things,
                        and I love what I do and this is my website I built with React and taildwind Css. </h5>

                    <div className='flex gap-5 mt-10 lg:justify-center'>
                        <a href={CV} target="_blank"
                            rel="nofollow noindex noreferrer noopener" className='a-primary btn'>Resume</a>
                        <a href={'#contact'} className='a-primary btn btn-primary'>Say Hello</a>
                    </div>
                </div>

                <div className="dark:bg-[linear-gradient(#4db5ff,transparent)] w-[22rem] h-[30rem]  
            mt-16  rounded-tr-[12rem] rounded-tl-[12rem] overflow-hidden pt-20 pr-6 pl-6
            lg:w-60 lg:h-auto 1md:mt-6 md:mt-0  ">
                    <img src={ME} alt="me" />
                </div>

            </div >
            <Mail />
            <Socials />
        </section>
    </header >);
}

export default Header;



