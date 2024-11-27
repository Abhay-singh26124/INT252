import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Navbar from '../../components/Navbar/Navbar';
import './Contactus.scss';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../sections/Footer/Footer';

const Contactus = () => {
    return (
        <>
            <section className='section-bg section-common contact-section'>
                <Navbar />
                <SectionTitle 
                    title="Contact Us"
                    description=" Your smile is in safe hands! Explore our services and let us help you achieve optimal oral health and a smile you’re proud to share."
                />
            </section>
            <section className='contact-form-area' data-aos="fade-up" data-aos-duration="2000">
                <ContactForm />
            </section>
            <Footer />
        </>
    );
};

export default Contactus;