import React from 'react'

export const SkillsButtons = () => {
    return (
        <div className='skills_buttons_container'>

            <div
                className='skills_icon_container'
                data-aos='zoom-out'>
                <div className='skills_icon'>
                    <img
                        src='./assets/svg/html.svg'
                        alt=''
                        className='skills_icon_html' />
                </div>
                <h5
                    className='skills_icon_name'>
                    HTML
                </h5>
            </div>

            <div
                className='skills_icon_container'
                data-aos='zoom-in'>
                <div className='skills_icon'>
                    <img
                        src='./assets/svg/css.svg'
                        alt=''
                        className='skills_icon_css' />
                </div>
                <h5
                    className='skills_icon_name'>
                    CSS
                </h5>
            </div>

            <div
                className='skills_icon_container'
                data-aos='zoom-out'>
                <div className='skills_icon'>
                    <img
                        src='./assets/svg/js.svg'
                        alt=''
                        className='skills_icon_js' />
                </div>
                <h5
                    className='skills_icon_name'>
                    JavaScript
                </h5>
            </div>

            <div
                className='skills_icon_container'
                data-aos='zoom-in'>
                <div className='skills_icon'>
                    <img
                        src='./assets/svg/react.svg'
                        alt=''
                        className='skills_icon_react' />
                </div>
                <h5
                    className='skills_icon_name'>
                    React
                </h5>
            </div>

            <div
                className='skills_icon_container'
                data-aos='zoom-out'>
                <div className='skills_icon'>
                    <img
                        src='./assets/svg/npm.svg'
                        alt=''
                        className='skills_icon_npm' />
                </div>
                <h5
                    className='skills_icon_name'>
                    NPM
                </h5>
            </div>


        </div>
    )
}
