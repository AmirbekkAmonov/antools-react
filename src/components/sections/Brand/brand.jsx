import './brand.scss'

function Brand() {
    return (
        <section className='brand'>
            <div className='container'>
                <div className='brand__content'>
                <b>Trusted more than 150+ brand</b>
                <div className='brand__img'>
                    <img src="./assets/images/logos_microsoft.png" alt="" />
                    <img src="./assets/images/logos_google.png" alt="" />
                    <img src="./assets/images/logos_slack.png" alt="" />
                    <img src="./assets/images/logos_wordpress.png" alt="" />
                </div>
                </div>
            </div>
        </section>
    );
}   

export default Brand