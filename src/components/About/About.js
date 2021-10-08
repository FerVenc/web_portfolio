// General Imports:
import React, { useEffect } from 'react';
import Aos from 'aos';

// Components:
import { AboutInfo } from './AboutInfo';

// Styles:
import '../../styles/About.css'
import '../../styles/animation.css';
import 'aos/dist/aos.css';


export const About = () => {

    // Scroll Animation:
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease'
        });
    }, [])

    return (
        //General Container:
        <section className='about_container'>

            {/* About Container: */}
            <div className='about'>

                {/* About Info: */}
                <AboutInfo />

                {/* About Photo: */}
                <div className='about_photo' data-aos='fade-left'></div>

            </div>
        </section>
    );
}
