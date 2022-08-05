import React, { useRef } from 'react';

import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'

import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e18lz1o', 'template_v1yfo3l', form.current, 'VjJheVFdVuJ_65pxY')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Fale Comigo</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>E-mail</h4>
            <h5>gabripalmyro13579@gmail.com</h5>
            <a href="mailto:gabripalmyro13579@gmail.com" target="_blank" rel="noreferrer">Enviar e-mail</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>Gabriel Palmyro</h5>
            <a href="https://www.linkedin.com/in/gabriel-palmyro" target="_blank" rel="noreferrer">Enviar mensagem</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+55 11 94350-6431</h5>
            <a href="https://api.whatsapp.com/send?phone=5511943506431" target="_blank" rel="noreferrer">Enviar mensagem</a>
          </article>
        </div>
        {/* end of options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Seu nome completo' required />
          <input type="email" name="email" placeholder='Seu e-mail' required />
          <textarea name="message" rows="7" placeholder='Sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact