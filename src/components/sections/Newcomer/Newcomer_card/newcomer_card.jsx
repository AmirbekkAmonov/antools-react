import './newcomer_card.scss'

function Newcomer_card(props) {
    return (
        <div className="newcomer__card">
           <div className='newcomer__card__img'>
                <img src="./assets/images/zeplin.png" alt="" />
                <div className='newcomer__card__img__text'>
                    <b>Zeplin</b>
                    <p>Free & Paid</p>
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