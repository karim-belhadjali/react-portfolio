import React from 'react';
import { AiOutlineHome } from 'react-icons/ai'




function NavItem({ title, desc, link, close, active, icon }) {

    let sectionName;

    let defaultClassName = 'flex justify-between group m-6 p-3 rounded-2xl dark:bg-bgvariant  border border-solid dark:border-bgvariant transition ease-in   dark:hover:bg-transparent dark:hover:border-primary'
    let titleClassName = 'font-semibold dark:group-hover:text-primary '
    let iconClassName = "dark:group-hover:text-primary flex flex-col justify-center"

    switch (title) {
        case "Home":
            sectionName = "#home"
            break;
        case "About me":
            sectionName = "#about"
            break;
        case "Skills":
            sectionName = "#experience"
            break;
        case "Portfolio":
            sectionName = "#experience"
            break;
        case "Services":
            sectionName = "#services"
            break;
        case "Contact":
            sectionName = "#contact"
            break;

        default:
            sectionName = "#home"
            break;
    }

    if (active === sectionName) {
        defaultClassName = 'flex justify-between m-6 p-3 rounded-2xl bg-transparent  border border-solid dark:border-primary transition ease-in'
        iconClassName = "dark:text-primary flex flex-col justify-center"
    }



    return (<a href={link} onClick={() => close(sectionName)} className={defaultClassName}>
        <div >
            <h2 className={titleClassName}>{title}</h2>
            <h5 className="dark:text-light dark:group-hover:text-white">{desc}</h5>
        </div>
        <div className={iconClassName} >
            {icon}
        </div>
    </a>);
}

export default NavItem;