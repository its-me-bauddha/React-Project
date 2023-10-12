import { useState } from "react";


function Card({id, image,info,price,name, removeTour})  {
    const[readMore,setReadMore] = useState(false);
    
    const description = readMore ? info :`${info.substring(0,200)}....`;
    function readMoreHandler() {
        setReadMore(!readMore);
    }


    return (
        
        <div className="card">

            <img src={image} className="image" alt="img"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price" style={{color :"#AA0000"}}>₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" style={{color :"#AA0000"}}  onClick={readMoreHandler}>
                        {readMore ? `Show Less`: `Read \More`}
                    </span>
                </div>
            </div>

            <button className="btn-red not-interested" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
        
    );
}

export default Card;