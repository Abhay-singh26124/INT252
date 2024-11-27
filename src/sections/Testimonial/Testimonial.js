import React from 'react';
import './Testimonial.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/testimonial/1.png';
import imgTwo from '../../assets/testimonial/2.png';
import imgThree from '../../assets/testimonial/3.png';
import TestimoniCard from '../../components/TestimoniCard/TestimoniCard';
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

const Testimonial = () => {

    const testimonails = [
        {
            'img': imgOne,
            'name': 'Robert Fox',
            'description' : 'I had a root canal done here, and I was really nervous. But the team was caring, and the procedure was virtually pain-free.',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgTwo,
            'name': 'Albert Flores',
            'description' : 'A fantastic experience from start to finish. The staff is friendly, the office is welcoming, and the treatment was painless. I’ve finally found my go-to dentist!',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgThree,
            'name': 'Bessie Cooper',
            'description' : 'I’ve been coming here for years, and I trust Dentalist with my entire family’s dental care. The team is always kind and makes us feel comfortable every visit',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgOne,
            'name': 'Bessie Cooper',
            'description' : 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        }
    ]

    // slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <section className='testimonail-section section-bg section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle 
                        subTitle="TESTIMONIAL"
                        title="What people have said about us"
                        />
                    </div>
                    <div className="col-lg-6">
                        <p className="pt-5">we are proud to have helped countless patients achieve healthier, more confident smiles. But don’t just take our word for it—read what our patients have to say about their experiences with us!</p>
                    </div>
                </div>

                <Slider {...settings} className="testimoni-slider">
                    {
                        testimonails.map(testimonail => <TestimoniCard testimonail={testimonail} />)
                    }
                </Slider>
               
            </div>
        </section>
    );
};

export default Testimonial;