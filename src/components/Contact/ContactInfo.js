import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faMailBulk, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

export const ContactInfo = () => {
    return (

        <div
            className='contact_info'
            data-aos='fade-up'>

            <h4
                className='contact_info_tittle'>
                Contact Info
            </h4>

            <div
                className='contact_info_info'>
                <FontAwesomeIcon
                    icon={faMapPin}
                    className='contact_info_icon'
                />
                <h6>Mérida, Yucatán, México</h6>
            </div>

            <div
                className='contact_info_info'>
                <FontAwesomeIcon
                    icon={faMailBulk}
                    className='contact_info_icon'
                />
                <h6>fevek.dev@gmail.com</h6>
            </div>

            <div
                className='contact_info_info'>
                <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className='contact_info_icon'
                />
                <h6>+52 9993542161</h6>
            </div>

        </div>
        
    )
}
