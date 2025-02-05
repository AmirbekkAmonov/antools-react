import './newcomer.scss'
import Newcomer_card from './Newcomer_card/newcomer_card'

function Newcomer() {
    return (
        <div className="newcomer">
            <div className="container">
                <div className='newcomer__text'>
                    <h2>Newcomer Tools</h2>
                    <p>Wow! see the latest update of the most recommended tools from reliable designers and developers</p>
                    <button>Explore more</button>
                </div>
                <div className='newcomer__cards'>
                    <Newcomer_card />
                    <Newcomer_card />   
                    <Newcomer_card />
                    <Newcomer_card />
                </div>
            </div>
        </div>
    );
}

export default Newcomer