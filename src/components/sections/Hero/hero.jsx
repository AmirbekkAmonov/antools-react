import React, { useEffect} from 'react'
import './hero.scss'
import Input from './input/input'
import Aos from 'aos';
import "aos/dist/aos.css";


function Hero() {
    useEffect(() => {
        Aos.init({ 
            duration: 800,
            easing: "ease-in-out", 
            once: true, 
        });
    }, [])
    return (
        <section className='hero'>
            <div className='container'>
                <div className='hero__content'>
                    <h1 data-aos="fade-up">Awesome tools for
                        Designer & Developer <span>.</span></h1>
                    <p data-aos="fade-up" data-aos-delay="200">Antool is a web collection of information on paid or free Design and Development tools</p>
                    <Input />
                    <div className='hero__content__img'>
                        <a href="https://www.facebook.com"><img src="./assets/icons/facebook.svg" alt="" /></a>
                        <a href="https://www.instagram.com"><img src="./assets/icons/instagram.svg" alt="" /></a>
                        <a href="https://www.twitter.com"><img src="./assets/icons/twitter.svg" alt="" /></a>
                    </div>
                </div>
                <div className='hero__img'>
                    <img src="./assets/images/Illustration.png" alt="" />
                </div>
            </div>
        </section>
    );
}

export default Hero