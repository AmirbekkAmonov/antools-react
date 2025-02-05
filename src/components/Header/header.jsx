import './header.css'
function header() {
    function toggleDropdown() {
        const dropdownContent = document.getElementById("myDropdown");
        dropdownContent.classList.toggle("show");
    }
    function handleClickOutside(event) {
        const dropdownContent = document.getElementById("myDropdown");
        if (!event.target.closest('.dropdown')) {
            dropdownContent.classList.remove("show");
        }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return (
        <header>
            <a href="#" className="logo"> <img src="./assets/icons/Logo.svg" alt="" />antools.</a>
            <div className="links">
                <a href="#">Home</a>
                <div className='dropdown'>
                    <button className="dropbtn" onClick={toggleDropdown}>Categories <img className='arrow' src="./assets/icons/chevron-down.svg" alt="" /></button>
                    <div className="dropdown-content" id="myDropdown">
                        <a href="#">Item 1</a>
                        <a href="#">Item 2</a>
                        <a href="#">Item 3</a>
                    </div>
                </div>
                <a href="#">My Collections</a>
                <a href="#">Blog</a>
            </div>
            <div className='register'>
                <button className='login'>Login</button>
                <button className='signup'>Sign Up</button>
            </div>
        </header>
    );
}

export default header