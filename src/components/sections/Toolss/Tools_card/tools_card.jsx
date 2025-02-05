import './tools_card.scss'

function Tools_card() {
    return (
        <div className='tools__card'>
            <div className='tools__card__img'>
                <img src="./assets/images/figma.svg" alt="" />
                <div className='tools__card__img__text'>
                    <b>FIGMA</b>
                    <p>Free</p>
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