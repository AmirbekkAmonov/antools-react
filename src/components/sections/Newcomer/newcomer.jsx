import './newcomer.scss'
import Newcomer_card from './Newcomer_card/newcomer_card'

function Newcomer() {
    const Newcomer = [
        { image: './assets/images/zeplin.png', title: 'Zeplin', description: 'Free & Paid' },
        { image: './assets/images/phpstorm.png', title: 'PHPStorm', description: 'Free' },
        { image: './assets/images/procreate.png', title: 'Procreate', description: 'Paid' },
        { image: './assets/images/toolbox.png', title: 'Toolbox', description: 'Free' }
    ];
    return (
        <div className="newcomer">
            <div className="container">
                <div className='newcomer__text'>
                    <h2 data-aos="fade-up">Newcomer Tools</h2>
                    <p data-aos="fade-up" data-aos-delay="100">Wow! see the latest update of the most recommended tools from reliable designers and developers</p>
                    <button data-aos="fade-up" data-aos-delay="200">Explore more</button>
                </div>
                <div className='newcomer__cards'>
                    {Newcomer.map((comer, index) => (
                        <Newcomer_card
                            key={index}
                            image={comer.image}
                            title={comer.title}
                            description={comer.description}
                            aosDelay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Newcomer