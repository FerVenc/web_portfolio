import React from 'react';
import { Link } from 'react-scroll';

export const DesktopMenu = ( ) => {
    return (
        <ul className='menu_container' >

        <li>
            <Link to='home_container'
                className='menu_container_link'
                smooth={true}
                duration={1000}>
                Home
            </Link>
        </li>

        <li>
            <Link to='about'
                className='menu_container_link'
                smooth={true}
                duration={1000}>
                About
            </Link>
        </li>

        <li>
            <Link to='skills_container'
                className='menu_container_link'
                smooth={true}
                duration={1000}>
                Skills
            </Link>
        </li>

        <li>
            <Link to='contact_container'
                className='menu_container_link'
                smooth={true}
                duration={1000}>
                Contact
            </Link>
        </li>

    </ul>
    )
}
