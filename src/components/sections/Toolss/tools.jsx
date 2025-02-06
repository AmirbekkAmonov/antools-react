import React, { useState } from 'react';
import './tools.scss'
import Tools_card from './Tools_card/tools_card'
function Tools() {
    const initialTools =[
        { image: './assets/images/figma.svg', title: 'FIGMA', description: 'Free' },
        { image: './assets/images/sketch.svg', title: 'Sketch', description: 'Trial & Paid' },
        { image: './assets/images/vscode.svg', title: 'Visual Studio Code', description: 'Free' },
        { image: './assets/images/notion.svg', title: 'Notion', description: 'Free & Paid' },
        { image: './assets/images/slack.svg', title: 'Slack', description: 'Free & Paid' },
        { image: './assets/images/invision.svg', title: 'Invision', description: 'Trial & Paid' },
    ]
    const [toolsData, setToolsData] = useState(initialTools);
    const [isExpanded, setIsExpanded] = useState(false); 

    const toggleTools = () => {
        if (isExpanded) {
        
            setToolsData(initialTools);
        } else {
            setToolsData(prevTools => [...prevTools, ...initialTools]);
        }
        setIsExpanded(!isExpanded); 
    };
    return (
        <section className='tools'>
            <div className='container'>
                <div className='tools__text'>
                    <h2 data-aos="fade-up">Most Popular Tools</h2>
                    <p data-aos="fade-up" data-aos-delay="200">Tools for the best Designers and Developers
                        most popularly used in the world</p>
                </div>

                <div className='tools__cards'>
                    {
                        toolsData.map((tools, index) => (
                            <Tools_card
                                key={index}
                                image={tools.image}
                                title={tools.title}
                                description={tools.description}
                                aosDelay={index * 100}
                            />
                        ))
                    }
                </div>
                <button onClick={toggleTools}>
                    {isExpanded ? 'Show Less' : 'Show More'}
                </button>
            </div>
        </section>
    );
}

export default Tools;