import React, { useState } from 'react';


 
const Tour = ({id, image, name, info, price, removeTour}) => {
  // readmore toggle
  const [readmore, setReadmore] = useState(false)

  return <article className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>{readmore ? info : info.substring(0, 200)} . . .  {/* nifty substring function */}
        <button onClick={()=> setReadmore(!readmore)}>{readmore ? 'Show Less' : 'Show More'}</button>      
      </p> 
      <button className="delete-btn" onClick={()=> removeTour(id)} >Not Interested</button>
    </footer>
  </article>
};

export default Tour;
