import React, {useState} from 'react'; 
import "./carousel.scss";

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
    <img src={images[position]} alt='' />
    <button onClick={()=>changeImage(-1)}>Previous</button>
    <button onClick={()=>changeImage(1)}>next</button>
    <div>{position + 1} / {qty}</div>
    </aside>
    );
}