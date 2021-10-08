// General Imports:
import React, { useEffect } from 'react';
import Aos from 'aos';

// Styles:
import '../../styles/Skills.css';
import '../../styles/animation.css';
import 'aos/dist/aos.css';
import { SkillsButtons } from './SkillsButtons';

export const Skills = () => {

    // Scroll Animation:
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease'
        });
    }, [])

    return (

        // General Container:
        <div className='skills_container'>

            {/* Skills Tittle */}
            <h2
                className='skills_tittle'
                data-aos='fade-right'>Skills</h2>
            <hr
                className='skills_tittle_line'
                data-aos='fade-left' />


            {/* Skill Project Container */}
            <div
                className='skills_project'
                data-aos='zoom-out' >
                <a
                    href='https://fervenc.github.io/TD_List/'
                    className='skills_project_container'>
                    Click Me
                </a>
            </div>

            {/* Skills Buttons Container */}
            <SkillsButtons/>

        </div>
    );
}
