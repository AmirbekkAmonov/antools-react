import './carousel.scss'

function Carousel() {
    return (
        <section className='carousel'>
            <div className='container'>
                <div className='carousel__content'>
                    <img src="./assets/icons/Vector.svg" alt="" />
                    <div className='user'>
                        <div className='user__img'>
                            <div className='back'></div>
                            <img src="./assets/images/User.png" alt="" />
                            <div className='user__img__text'>
                                <strong>Ronald Richards</strong>
                                <p>Product Manager</p>
                            </div>
                        </div>
                        <div className='user__text'>
                            <img src="./assets/icons/“.svg" alt="" />
                            <p>Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</p>
                        </div>
                    </div>
                    <img src="./assets/icons/Vector2.svg" alt="" />
                </div>
                <div className='carousel__line'>
                    <div></div>
                    <div className='active'></div>
                    <div></div>
                </div>
            </div>
        </section>
    );
}

export default Carousel;