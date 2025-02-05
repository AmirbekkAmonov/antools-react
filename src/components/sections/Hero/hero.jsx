import './hero.scss'

function Hero() {
    return (
        <section className='hero'>
            <div className='container'>
                <div className='hero__content'>
                    <h1>Awesome tools for
                        Designer & Developer <span>.</span></h1>
                    <p>Antool is a web collection of information on paid or free Design and Development tools</p>
                    <label class="label">
                        <div class="input-container">
                            <img src="./assets/icons/search.svg" alt="" />
                            <input type="text" placeholder='find more than 430+ tools...' />
                            <button>Search</button>
                        </div>
                    </label>
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