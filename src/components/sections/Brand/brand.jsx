import './brand.scss'

function Brand() {
    return (
        <section className='brand' >
            <div className='container' data-aos="fade-up">
                <div className='brand__content'>
                <b data-aos="fade-zoom-in">Trusted more than 150+ brand</b>
                <div className='brand__img'>
                    <img src="./assets/images/logos_microsoft.png" alt="" data-aos="fade-up" />
                    <img src="./assets/images/logos_google.png" alt="" data-aos="fade-up" data-aos-delay="100" />
                    <img src="./assets/images/logos_slack.png" alt="" data-aos="fade-up" data-aos-delay="200" />
                    <img src="./assets/images/logos_wordpress.png" alt="" data-aos="fade-up" data-aos-delay="300" />
                </div>
                </div>
            </div>
        </section>
    );
}   

export default Brand