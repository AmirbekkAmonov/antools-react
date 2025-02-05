import './footer.scss'
function footer() {
    return (
        <footer>
            <div className='Logo'>
                <a href="#" className='logo'><img src="./assets/icons/Logo.svg" alt="" /> antools.</a>
                <b>Copyright 2021. Antools</b>
                <p>Antool is a web collection of information on paid or free Design and Development tools</p>
            </div>
            <div className='links'>
                <div className='link'>
                    <b>Contact Us</b>
                    <a href="tel:+621987463">+621987463</a>
                    <address>M Building, No.10 A</address>
                    <a href="mailto:antools@awesome.com">antools@awesome.com</a>
                </div>
                <div className='link'>
                    <b>Categories</b>
                    <a href="#">Design</a>
                    <a href="#">Development</a>
                </div>
                <div className='link'>
                    <b>Company Info</b>
                    <a href="#">About Us</a>
                    <a href="#">Our Partners</a>
                    <a href="#">Blog</a>
                </div>
            </div>
        </footer>
    );
}

export default footer