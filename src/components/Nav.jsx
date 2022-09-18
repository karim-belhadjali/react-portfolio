import React, { useEffect } from 'react';

import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import anime from "animejs/lib/anime.es.js"


function Nav(props) {
    const activeclass = 'a-nav  dark:bg-bg dark:text-white'
    useEffect(() => {
        animateNav(props.show)
    }, [props.show]);

    return (<nav className="bottom-nav hidden opacity-0 bg-[rgba(0,0,0,0.3)] w-max px-8 py-5 fixed z-10 gap-3 rounded-4xl left-2/4 translate-x-[-50%] bottom-4 backdrop-blur-lg xs:w-max xs:overflow-x-auto" >
        <a href="#home" onClick={() => props.changeActive("#home")} className={props.activeSection === "#home" ? activeclass : 'a-nav'}><AiOutlineHome /></a>
        <a href="#about" onClick={() => props.changeActive("#about")} className={props.activeSection === "#about" ? activeclass : 'a-nav'}><AiOutlineUser /></a>
        <a href="#experience" onClick={() => props.changeActive("#experience")} className={props.activeSection === "#experience" ? activeclass : 'a-nav'}><AiOutlineBook /></a>
        <a href="#services" onClick={() => props.changeActive("#services")} className={props.activeSection === "#services" ? activeclass : 'a-nav'}><RiServiceLine /></a>
        <a href="#contact" onClick={() => props.changeActive("#contact")} className={props.activeSection === "#contact" ? activeclass : 'a-nav'}><BiMessageSquareDetail /></a>
    </nav>);
}

export default Nav;


const animateNav = (show) => {
    if (show === true) {
        anime({
            targets: ".bottom-nav",
            opacity: '1',
            duration: 500,
            easing: 'easeInOutQuad',
            begin: function () {
                document.querySelector(".bottom-nav").style.display = 'flex';
            },
        });
    } else {
        anime({
            targets: ".bottom-nav",
            opacity: '0',
            duration: 500,
            easing: 'easeInOutQuad',
            begin: function () {
                document.querySelector(".bottom-nav").style.display = 'hidden';
            },
        });
    }

}