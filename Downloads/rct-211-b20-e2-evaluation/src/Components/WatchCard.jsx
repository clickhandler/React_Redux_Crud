import React from "react";

import { Link } from "react-router-dom";
const WatchCard = ({ id, item }) => {
  return (
    
      
  
      <div style={{
        display: "grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto",
        width: "100%",
        margin: "auto",
      }} data-testid={`watch-card-wrapper-${id}`}>
        <div>
          <Link to={`/watches/${item.id}`}>
            {" "}
            <img  style={{width:"300px"}} data-testid="watch-card-image" src={item.image} alt="" />{" "}
          </Link>
        </div>
        <div>
          <div data-testid="watch-name">{item.name}</div>
          <div data-testid="watch-category">{item.category}</div>
        </div>
      </div>
    
  );
};

export default WatchCard;
