import React from 'react'
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

export const ContactForm = () => {

    // Send Email:
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'portfolio_emailservice', e.target, 'user_IwUaX7a2WoY2b2r204CXT')
            .then((result) => {
                console.log(result.text);
                swal({
                    title: "Message sent successfully!",
                    text: "Thanks for your visit!",
                    icon: "success",
                    button: "Close",
                });
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <>
            <form
                onSubmit={sendEmail}
                className="contact_form"
                data-aos='zoom-out'
            >

                <label
                    className='contact_form_label'>
                    Name
                </label>
                <input
                    type="text"
                    className="contact_form_input"
                    placeholder='Type Your Name'
                    name='name'
                    required
                    autoComplete="off"
                />

                <label
                    className='contact_form_label'>
                    Email
                </label>
                <input
                    type="email"
                    className="contact_form_input"
                    placeholder=' Type Your Email'
                    name='email'
                    required
                    autoComplete="off"
                />

                <label
                    className='contact_form_label'>
                    Subject
                </label>
                <input
                    type="text"
                    className="contact_form_input"
                    placeholder='Type Your Subject'
                    name='subject'
                    required
                    autoComplete="off"
                />

                <label
                    className='contact_form_label'>
                    Message
                </label>
                <textarea
                    className="contact_form_textarea"
                    id=''
                    cols='30'
                    rows='8'
                    placeholder='Type Your Message Here'
                    name='message'
                    required
                    autoComplete="off"
                />

                <button
                    type="submit"
                    value="Send Message"
                    className='contact_form_button' >
                    Send Message
                </button>

            </form>
        </>
    )
}
