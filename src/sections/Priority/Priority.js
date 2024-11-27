import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import priorityImg from '../../assets/about/priority.png';
import './Priority.scss';

const Priority = () => {
    return (
        <section className='priority-section emergency-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-img">
                            <img src={priorityImg} alt="Emergency" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-text">
                            <SectionTitle 
                                subTitle="OUR PRIORITY" 
                                title="Our clients are our priority"
                                description="we believe that your dental care should never be compromised. From the moment you walk through our doors, we make it our mission to ensure that your comfort, health, and satisfaction are our top priorities."
                            />

                            <div className="theme-btn">
                                <Link to='/'>Book an appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Priority;