import React from 'react';

import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs'

function Socials() {
    return (<div className='sm:hidden flex flex-col items-center gap-6 fixed left-5 w-20 right-auto bottom-0 
    after:w-[1px] after:h-[140px] dark:after:bg-primary
     lg:left-5 lg:w-9 '>
        <a href="https://www.linkedin.com/in/karim-bel-hadj-ali/" className='a-primary hover:scale-125 transition duration-200 ease-in-out xl:scale-90' target="_blank"
            rel="nofollow noindex noreferrer noopener"> <BsLinkedin size={20} /> </a>
        <a href="https://github.com/karim-belhadjali" target="_blank"
            rel="nofollow noindex noreferrer noopener" className='a-primary hover:scale-125 transition duration-200 ease-in-out  xl:scale-90' > <BsGithub size={20} /></a>
        <a href="https://twitter.com/karimbelhadjal2" className='a-primary hover:scale-125 transition duration-200 ease-in-out  xl:scale-90' target="_blank"
            rel="nofollow noindex noreferrer noopener"> <BsTwitter size={20} /></a>
        <a href="https://www.instagram.com/karim.belhadj2/" className='a-primary hover:scale-125 transition duration-200 ease-in-out  xl:scale-90' target="_blank"
            rel="nofollow noindex noreferrer noopener"> <BsInstagram size={20} /></a>
    </div>);
}

export default Socials;

