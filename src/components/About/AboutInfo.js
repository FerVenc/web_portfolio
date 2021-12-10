import React from 'react'

export const AboutInfo = () => {
    return (
        <div
            className='about_info'
            data-aos='fade-up' >
            <h2
                className='about_tittle'
                data-aos='fade-right'>
                About Me
            </h2>
            <hr
                className='about_tittle_line'
                data-aos='fade-left' />
            <p
                className='about_text01'>
                I´m Fernando Ventura Front End Developer from México
            </p>
            <p
                className='about_text02'>
                Using the most up-to-date technology, I turn ideas into
                websites and applications with an elegant design and a
                better user experience. When I'm not coding I'm learning
                to keep improving my work day by day.
            </p>
            <a
                href='https://drive.google.com/uc?export=download&id=1Wfl8lOGNO5lfjR3H45_eyRY4EMCtrbvb'
                className='about_download_link' >
                Download CV
            </a>
        </div>
    )
}
