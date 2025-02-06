import './tools.scss'
import Tools_card from './Tools_card/tools_card'
function Tools() {
    return (
        <section className='tools'>
            <div className='container'>
                <div className='tools__text'>
                    <h2>Most Popular Tools</h2>
                    <p>Tools for the best Designers and Developers
                        most popularly used in the world</p>
                </div>
                
                <div className='tools__cards'>
                    <Tools_card />
                    <Tools_card />
                    <Tools_card />
                    <Tools_card />
                    <Tools_card />
                    <Tools_card />
                </div>
                <button>Load more</button>
            </div>
        </section>
    );
}

export default Tools