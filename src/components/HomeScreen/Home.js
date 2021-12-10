// General Imports:
import React, { useState, useEffect } from 'react';
import { ImgFallback } from '../../helpers/ImgFallback/ImgFallback';
// Img Sources
import Sky from '../../img/Sky.webp';
import SkyFallBack from '../../img/Sky.png';
import Planet1 from '../../img/Planet1.webp';
import Planet1Fallback from '../../img/Planet1.png';
import Planet2 from '../../img/Planet2.webp';
import Planet2Fallback from '../../img/Planet2.png';
import Mountain from '../../img/Mountain.webp';
import MountainFallback from '../../img/Mountain.png';
// import Clouds from '../../img/Clouds.webp';
// import CloudsFallback from '../../img/Clouds.png';


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

            <ImgFallback
                src={Sky}
                fallbackSrc={SkyFallBack}
                alt='Sky'
            />

            {/* <img
                    src='./assets/Sky.png'
                    alt=''
                    className='sky' /> */}

            <ImgFallback
                src={Planet1}
                fallbackSrc={Planet1Fallback}
                alt='Planet1'
                className='planet1'
                style={{ transform: `translateY(${offset * 0.8}px)` }}
            />

            {/* <img
                    src='./assets/Planet1.png'
                    alt=''
                    className='planet1'
                    style={{ transform: `translateY(${offset * 0.8}px )` }} /> */}

            <h2
                className='header_text'
                style={{ transform: `translateY(${offset * 0.5}px )` }} >
                Welcome to my Space
            </h2>

            <ImgFallback
                src={Planet2}
                fallbackSrc={Planet2Fallback}
                alt='planet2'
                className='planet2'
                style={{ transform: `translateY(${offset * 0.6}px )` }}
            />

            {/* <img
                    src='assets/Planet2.png'
                    alt=''
                    className='planet2'
                    style={{ transform: `translateY(${offset * 0.5}px )` }} /> */}

            <ImgFallback
                src={Mountain}
                fallbackSrc={MountainFallback}
                alt='mountain'
                className='mountain'
                style={{ transform: `translateY(${offset * 0.4}px )` }} />

            {/* <img
                src='assets/Mountain.png'
                alt=''
                className='mountain'
                style={{ transform: `translateY(${offset * 0.4}px )` }} /> */}

            {/* <ImgFallback
                src={Clouds}
                fallbackSrc={CloudsFallback}
                alt='clouds'
                className='clouds'
                style={{ transform: `translateY(${offset * 0.25}px )` }} /> */}

            <img
                src='assets/Clouds.png'
                alt=''
                className='clouds'
                style={{ transform: `translateY(${offset * 0.25}px )` }} />

        </section>
    );

}
