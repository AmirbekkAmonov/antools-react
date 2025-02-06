import './tools_card.scss'

function Tools_card({image, title, description,aosDelay }) {
   
    return (
        <div className='tools__card' data-aos="fade-up" data-aos-delay={aosDelay}>
            <div className='tools__card__img'>
                <img src={image} alt={title} />
                <div className='tools__card__img__text'>
                    <b>{title}</b>
                    <p>{description}</p>
                </div>
            </div>
            <div className='tools__card__content'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='tools__card__content__icons'>
                    <div className='tools__card__content__icons__img'>
                        <img src="./assets/icons/like.svg" alt="" />
                        <img src="./assets/icons/folder-add.svg" alt="" />
                    </div>
                    <button>Visit</button>
                </div>
            </div>
        </div>
    );
}

export default Tools_card