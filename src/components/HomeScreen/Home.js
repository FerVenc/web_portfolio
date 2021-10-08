// General Imports:
import React, { useState, useEffect } from 'react';

// Styles:
import '../../styles/Home.css';

export const Home = () => {

    // Parallax Effect:
    const [offset, setOffset] = useState(0);
    const handleScroll = () => setOffset(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (

        // Header Home Parallax Container:
        <section className='home_container'>

            <img
                src='./assets/Sky.png'
                alt=''
                className='sky' />

            <img
                src='./assets/Planet1.png'
                alt=''
                className='planet1'
                style={{ transform: `translateY(${offset * 0.8}px )` }} />

            <h2
                className='header_text'
                style={{ transform: `translateY(${offset * 0.4}px )` }} >
                Hello! Welcome to my Space
            </h2>

            <img
                src='assets/Planet2.png'
                alt=''
                className='planet2'
                style={{ transform: `translateY(${offset * 0.5}px )` }} />

            <img
                src='assets/Mountain.png'
                alt=''
                className='mountain'
                style={{ transform: `translateY(${offset * 0.4}px )` }} />

            <img
                src='assets/Clouds.png'
                alt=''
                className='clouds'
                style={{ transform: `translateY(${offset * 0.25}px )` }} />

        </section>
    );

}
