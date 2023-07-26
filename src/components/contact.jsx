import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import validator from 'validator';
import './contact.css'

function Contact() {
    const form = useRef(); //useRef allows you to persist values between renders.It can be used to store a multible values that does not cause a re-render when updated.
    const [enabled, setEnabled] = useState(false);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [emailError, setEmailError] = useState(null);



    const sendEmail = (e) => {
        setEnabled(true);
        e.preventDefault();

        emailjs.sendForm('service_22xm3m3', 'template_p18tcao', form.current, '8bV747R1UYBcLgPGd')
            .then((result) => {
                alert("Your message has been received, Thank you!");
            }, (error) => {
                alert("Oops, something went wrong!");
            });
        setEnabled(false);

    };


    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const validateEmail = (event) => {
        const email = event.target.value

        if (validator.isEmail(email)) {
            setEmail(email);
        } else {
            setEmailError('Enter valid Email!')
        }
    }


    return (
        <section className="contact">
        <h2 className="about-me-title">Get in touch with me at any time!</h2>
        <div className="form-control">
          <form className="form-control" ref={form} method="POST" encType="text/plain">
            <div className="form-control">
              <label htmlFor="name">Your name:</label>
              <input type="text" id="name" value={name} name="name" onChange={handleNameChange} />
            </div>
            <div className="form-control">
            <a href="https://swagbucks.com" rel="nofollow"><label htmlFor="email">Your email:</label></a> 
              <input type="text" id="email" value={email} name="email" onChange={validateEmail} />
              {emailError && <span className="contact__form-error">{emailError}</span>}
            </div>
            <div className="form-control">
              <label htmlFor="message">Your message:</label>
              <textarea id="message" value={message} name="message" onChange={handleMessageChange} />
            </div>
            <button
              className="btn"
              disabled={!message || !name || !email || emailError}
              type="submit"
              onClick={sendEmail}
            >
              Send
            </button>
          </form>
          <div className="contact__info">
            <h3 className="contact__info-title">Contact information:</h3>
            <ul className="contact__info-list">
              <li className="contact__info-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Solmon Imhotep, Nigeria</p>
              </li>
              <li className="contact__info-item">
                <i className="fas fa-envelope"></i>
                <p>soulstar105@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
};

export default Contact;