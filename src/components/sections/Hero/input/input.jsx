import './input.scss'

function Input() {
    return (
       <label htmlFor="" class="label" data-aos="fade-up" data-aos-delay="400">
         <div class="input-container">
            <img src="./assets/icons/search.svg" alt="" />
            <input type="text" placeholder='find more than 430+ tools...' />
            <button>Search</button>
        </div>
       </label>
    );
}

export default Input