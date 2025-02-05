import Header from './components/Header/header' 
import Hero from './components/sections/Hero/hero'
import Tools from './components/sections/Toolss/tools';
import Brand from './components/sections/Brand/brand';
import Newcomer from './components/sections/Newcomer/newcomer'
import Carousel from './components/sections/Carousel/carousel';
import Become from './components/sections/Become/become'
import Footer from './components/Footer/footer'
function App() {
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