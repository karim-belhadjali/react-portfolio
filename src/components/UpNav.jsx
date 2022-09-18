import React, { useEffect, useRef, useState } from 'react';
import anime from "animejs/lib/anime.es.js"

import { BsMoonStars, BsArrowRight } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'

import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { SiBookstack } from 'react-icons/si'


import logo from '../assets/images/Ellipse1.png'
import NavItem from './items/NavItem';

function UpperNav(props) {
    const navRef = useRef()
    const [menuVisible, setmenuVisible] = useState(false);
    const [theme, settheme] = useState("dark");


    useEffect(() => {
        animateNav(props.show)

    }, [props.show]);

    useEffect(() => {
        const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        settheme(colorScheme)
        if (colorScheme === 'dark') {
            let htmlElement = document.getElementsByTagName("html")[0];
            htmlElement.classList.add("dark");
        }
    }, []);


    const showHideMenu = (section) => {
        if (!menuVisible) {
            animateMenu(false, setmenuVisible(true))
        } else {
            animateMenu(true, setmenuVisible(false))
            props.changeActive(section)

        }
    }
    const hideMenu = () => {
        animateMenu(true, setmenuVisible(false))
    }

    const toggleTheme = () => {
        if (theme === "dark") {
            let htmlElement = document.getElementsByTagName("html")[0];
            htmlElement.classList.remove("dark");
            settheme('light')
        } else {
            let htmlElement = document.getElementsByTagName("html")[0];
            htmlElement.classList.add("dark");
            settheme('dark')

        }
    }


    return (
        <div className='nav-header overflow-auto '>
            <div ref={navRef} className="nav-ref container dark:bg-transparent w-screen hidden justify-between fixed top-0 left-0 opacity-0 xs:px-2 ">
                <div className='mx-12 my-5 w-[7.5rem] h-auto xs:mx-0' ><img src={logo} alt="" /></div>
                <div className='flex gap-8 mx-12 mt-12 z-50 xs:mr-3' >
                    <div className='mt-1 a-primary cursor-pointer'>
                        <BsMoonStars onClick={toggleTheme} size={20} />
                    </div>
                    <div className='a-primary cursor-pointer'>
                        <BiMenuAltRight onClick={showHideMenu} size={30} />
                    </div>
                </div>
            </div>
            <div className='shadow dark:bg-[rgba(2,6,22,0.65)] h-screen w-screen right-[-2000px] fixed top-0  '></div>
            <div className='dark:bg-[rgba(2,6,22,1)] h-screen fixed top-0 w-[300px] right-[-340px] overflow-visible menu z-30'>
                <div className="absolute right-5 top-3"> <BsArrowRight onClick={hideMenu} size={30} /></div>
                <div className='items mt-10'>
                    <NavItem title="Home" desc="We start here" link="#home"
                        close={showHideMenu} active={props.activeSection} icon={<AiOutlineHome size={25} />} />
                    <NavItem title="About me" desc="Get To know me" link="#about" close={showHideMenu}
                        active={props.activeSection} icon={<AiOutlineUser size={25} />} />
                    <NavItem title="Skills" desc="My skills" link="#experience" close={showHideMenu}
                        active={props.activeSection} icon={<AiOutlineBook size={25} />} />
                    <NavItem title="Portfolio" desc="Some of my recent work" link="#experience" close={showHideMenu}
                        active={props.activeSection} icon={<SiBookstack size={25} />} />
                    <NavItem title="Services" desc="The services i offer" link="#services" close={showHideMenu}
                        active={props.activeSection} icon={<RiServiceLine size={25} />} />
                    <NavItem title="Contact" desc="Get in touch with me" link="#contact" close={showHideMenu}
                        active={props.activeSection} icon={<BiMessageSquareDetail size={25} />} />
                </div>


            </div>
        </div >
    );
}

export default UpperNav;





const animateMenu = (show, fl) => {
    if (!show) {
        anime({
            targets: ".shadow",
            right: 0,
            duration: 300,
            easing: "linear",

        });
        anime({
            targets: ".menu",
            right: 0,
            duration: 300,
            easing: "linear",
            complete: fl
        });
    } else {
        anime({
            targets: ".menu",
            right: '-340px',
            duration: 300,
            easing: "linear",
            complete: fl
        });
        anime({
            targets: ".shadow",
            right: '-2000px',
            duration: 500,
            easing: 'easeInOutQuad',

        });
    }


}


const animateNav = (show) => {
    if (show === true) {
        anime({
            targets: ".nav-ref",
            opacity: '1',
            duration: 300,
            easing: 'easeInOutQuad',
            begin: function () {
                document.querySelector(".nav-ref").style.display = 'flex';
            },
        });
    } else {
        anime({
            targets: ".nav-ref",
            opacity: '0',
            duration: 300,
            easing: 'easeInOutQuad',
            begin: function () {
                document.querySelector(".nav-ref").style.display = 'hidden';
            },
        });
    }

}