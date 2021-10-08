import React from 'react';
import { Link } from 'react-scroll';

export const ResponsiveMenu = ({ShowMenu, SetShowMenu}) => {

    return (
        <ul>

            <li className='menu_container_li'>
                <Link to='home_container'
                    className='menu_container_link'
                    smooth={true}
                    duration={1000}>
                    <i className='menu_container_link'
                        onClick={() => SetShowMenu(!ShowMenu)}>
                        Home
                    </i>
                </Link>
            </li>

            <li className='menu_container_li'>
                <Link to='about_container'
                    className='menu_container_link'
                    smooth={true}
                    duration={1000}>
                    <i className='menu_container_link'
                        onClick={() => SetShowMenu(!ShowMenu)}>
                        About
                    </i>
                </Link>
            </li>

            <li className='menu_container_li'>
                <Link to='skills_container'
                    className='menu_container_link'
                    smooth={true}
                    duration={1000}>
                    <i className='menu_container_link'
                        onClick={() => SetShowMenu(!ShowMenu)}>
                        Skills
                    </i>
                </Link>
            </li>

            <li className='menu_container_li'>
                <Link to='contact_container'
                    className='menu_container_link'
                    smooth={true}
                    duration={1000}>
                    <i className='menu_container_link'
                        onClick={() => SetShowMenu(!ShowMenu)}>
                        Contact
                    </i>
                </Link>
            </li>

        </ul>
    )
}
