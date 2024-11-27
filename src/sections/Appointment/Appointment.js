import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {

    //const mapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.72810807265!2d-0.24168024584704212!3d51.52877184047419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1666254073802!5m2!1sen!2sbd'
    const mapLink='https://www.google.com/maps/place/Block+37,+LPU+Open+Audi+Rd,+Punjab+144411/@31.2527088,75.7007298,17.6z/data=!4m18!1m11!4m10!1m4!2m2!1d75.7036278!2d31.2518638!4e1!1m3!2m2!1d75.70366!2d31.251965!3e2!3m5!1s0x391a5f6615525791:0x4917e8bf2338b1d8!8m2!3d31.2519282!4d75.7035147!16s%2Fg%2F1pv19tqdc?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D'
    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>Lovely professional University</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle 
                            subTitle="BOOK APPOINTMENT"
                            title="Care at Dentalist is pleasure"
                            description="From preventive treatments to advanced restorative procedures, we’re here to help you achieve and maintain a healthy, confident smile."/>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;