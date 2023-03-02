import React, {useState} from 'react'; 
import "./carousel.scss";
import arrowForward from "./arrow_forward.svg";
import arrowBack from "./arrow_back.svg";
export default function Carousel({images}) {
    const  qty = images.length;
    const [position, setPosition] = useState(0);
    function changeImage(increment){
        let newPosition = position + increment;
        if (newPosition < 0) newPosition = qty -1;
        if (newPosition >= qty) newPosition = 0;
        setPosition(newPosition);
    }
    return (
    <aside className="carousel">
<img src={images[position]} alt="" className="carousel__image" />
        <button className="carousel__button" onClick={() => changeImage(-1)}>
        <img src={arrowBack} alt="précédent" className='arrowSVG' />
      </button>
      <button className="carousel__button" onClick={() => changeImage(1)}>
        <img src={arrowForward} alt="suivant" className='arrowSVG'/>
      </button>
    <div className ="carousel_number">{position + 1} / {qty}</div>
    </aside>
    );
}