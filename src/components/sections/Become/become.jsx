import './become.scss'

function Become() {
    return (
        <div className="become">
            <div className="container">
                <h2>Become a contributor?</h2>
                <p>Join us and get tips & tricks to become a great Designer and Developer</p>
                <label htmlFor="" class="label">
                    <div class="input-container">
                        <input type="email" placeholder='Enter your email...' />
                        <button>Join Us</button>
                    </div>
                </label>
            </div>
        </div>
    );
}

export default Become;