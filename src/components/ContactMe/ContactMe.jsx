import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
     <section className='contact-container'>
        <h5>Contact</h5>

        <div className='contact-contetnt'>
            <div style={{flex: 1}}>
            <ContactInfoCard
              iconUrl="./assets/images/email-icon.png"
              text="gokulad2021008@gmail.com"/>
            <ContactInfoCard
              iconUrl="./assets/images/github-icon.png"
              text="https://github.com/gokul2003910/gokulad"/>
            </div>
            <div>
               <ContactForm/>
            </div>
        </div>
     </section>
  )
}

export default ContactMe
