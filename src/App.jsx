import Header from './components/Header/header' 
import Hero from './components/sections/Hero/hero'
import Tools from './components/sections/Toolss/tools';
import Brand from './components/sections/Brand/brand';
import Newcomer from './components/sections/Newcomer/newcomer'
import Carousel from './components/sections/Carousel/carousel';
import Become from './components/sections/Become/become'
import Footer from './components/Footer/footer'

import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function App() {
    useEffect(() => {
        Aos.init({  
            duration: 800,
            easing: "ease-in-out", 
            once: true, 
        });
    })
    
    return (
       <main>
           <Header />
           <Hero />
           <Tools />
           <Brand />
           <Newcomer />
           <Carousel />
           <Become />
           <Footer />   
       </main>
    );
}

export default App;