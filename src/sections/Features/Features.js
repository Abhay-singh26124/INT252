import React from 'react';
import './Features.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import IconList from '../../components/IconList/IconList';
import featuresData from './FeaturesData';

const Features = () => {
    return (
        <section className='section-bg section-common features-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle subTitle="Features" title="Specialized  care through experiences" description="we strive to offer the highest quality dental care with a focus on patient comfort and convenience. Our state-of-the-art facility is equipped with the latest technology, and our expert team provides a full range of dental services to meet all your needs."/>

                <div className="row align-items-center">
                    {
                        featuresData.map(singleFeature => 
                            <IconList 
                                icon={singleFeature.icon} 
                                title={singleFeature.title}
                                description={singleFeature.description}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;