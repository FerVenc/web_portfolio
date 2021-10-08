// General Imports:
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

// Styles:
import '../../styles/Menu.css';
import { DesktopMenu } from './DesktopMenu';
import { ResponsiveMenu } from './ResponsiveMenu';

export const MenuScreen = () => {

    const [navMenu, setNavMenu] = useState(false);
    const [ShowMenu, SetShowMenu] = useState(false);

    // Menu Background - Scroll Color Change:
    const changeBackground = () => {
        if (window.scrollY >= 800) {
            setNavMenu(true);
        } else {
            setNavMenu(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    // Responsive Menu:
    let menu =
        <nav className={ShowMenu ? 'menu_container_active' : 'menu_container_hide'}>
            {/* Responsive Icon Menu */}
            <FontAwesomeIcon icon={faTimes} onClick={() => SetShowMenu(!ShowMenu)} className='menu_container_icon' />
            <ResponsiveMenu
                SetShowMenu={SetShowMenu}
                ShowMenu={ShowMenu}
            />
        </nav>

    return (
        // Desktop Menu:
        <nav className={navMenu ? 'main_menu_active' : 'main_menu'}>
            <FontAwesomeIcon icon={faBars} onClick={() => SetShowMenu(!ShowMenu)} className='menu_responsive_icon' />
            {menu}

            {/* Menu Icon Logo */}
            <i className='menu_logo'>FvC</i>

            {/* Nav Menu Container */}
            <DesktopMenu />
        </nav>
    )
}
