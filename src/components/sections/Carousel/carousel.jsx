import React, { useState } from 'react';
import './carousel.scss';

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const reviews = [
        {
            id: 1,
            name: 'Ronald Richards',
            position: 'Product Manager',
            text: 'Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.',
            img: './assets/images/User.png',
        },
        {
            id: 2,
            name: 'Sarah Connor',
            position: 'UX Designer',
            text: 'Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.',
            img: './assets/images/User.png',
        },
        {
            id: 3,
            name: 'James Smith',
            position: 'Software Engineer',
            text: 'Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur...',
            img: './assets/images/User.png',
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className='carousel'>
            <div className='container'>
                <div className='carousel__content' data-aos="fade-up">
                    <img
                        src="./assets/icons/Vector.svg"
                        alt="Previous"
                        className="carousel__arrow"
                        onClick={handlePrev}
                    />
                    <div className='user'>
                        <div className='user__img'>
                            <div className='back'></div>
                            <img src={reviews[currentIndex].img} alt={reviews[currentIndex].name} />
                            <div className='user__img__text'>
                                <strong>{reviews[currentIndex].name}</strong>
                                <p>{reviews[currentIndex].position}</p>
                            </div>
                        </div>
                        <div className='user__text'>
                            <img src="./assets/icons/“.svg" alt="Quote" />
                            <p>{reviews[currentIndex].text}</p>
                        </div>
                    </div>
                    <img
                        style={{ transform: 'rotate(180deg)' }}
                        src="./assets/icons/Vector.svg"
                        alt="Next"
                        className="carousel__arrow"
                        onClick={handleNext}
                    />
                </div>
                <div className='carousel__line'>
                    {reviews.map((_, index) => (
                        <div
                            key={index}
                            className={currentIndex === index ? 'active' : ''}
                            onClick={() => goToSlide(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Carousel;
