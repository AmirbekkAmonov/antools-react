import './newcomer_card.scss'

function Newcomer_card({image, title, description, aosDelay }) {
    return (
        <div className="newcomer__card" data-aos="fade-up" data-aos-delay={aosDelay}>
           <div className='newcomer__card__img'>
                <img src={image } alt={title} />
                <div className='newcomer__card__img__text'>
                    <b>{title}</b>
                    <p>{description}</p>
                </div>
           </div>
           <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           <div className='newcomer__card__icon'>
                <div className='newcomer__card__icon__img'>
                    <img src="./assets/icons/like.svg" alt="" />
                    <img src="./assets/icons/folder-add.svg" alt="" />
                </div>
                <button>Visit</button>
           </div>
        </div>
    );
}

export default Newcomer_card