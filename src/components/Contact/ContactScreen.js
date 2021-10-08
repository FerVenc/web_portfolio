// General Imports:
import React, { useEffect } from 'react';
import Aos from 'aos';

// Styles:
import '../../styles/Contact.css';
import '../../styles/animation.css';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export const ContactScreen = () => {

    // Scroll Animation:
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease'
        });
    }, [])

    return (

        // General Container:
        <section className='contact_container'>

            {/* Contact Tittle */}
            <h2
                className='contact_tittle'
                data-aos='fade-right'>
                Contact Me
            </h2>
            <hr
                className='contact_tittle_line'
                data-aos='fade-left'
            />

            {/* Contact Form Container */}
            <div className='contact_form_container'>
                <ContactInfo />

                {/* Contact Form */}
                <ContactForm />
            </div>

        </section>

    );
}
