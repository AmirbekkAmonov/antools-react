import Header from './components/Header/header'
import Hero from './components/sections/Hero/hero'
import Tools from './components/sections/Toolss/tools';
import Brand from './components/sections/Brand/brand';
import Newcomer from './components/sections/Newcomer/newcomer'
import Carousel from './components/sections/Carousel/carousel';
import Become from './components/sections/Become/become'
import Footer from './components/Footer/footer'

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function App() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            offset: 120,
            debounce: 50,
            throttle: 99,
        });
        window.addEventListener('scroll', () => {
            AOS.refresh();
        });

        return () => {
            window.removeEventListener('scroll', AOS.refresh);
        };
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