import React from "react";
import "./RestaurantHeader.css";

const RestaurantHeader = ({ name, rating, cuisine, deliveryTime }) => {
    return (
        <div className="restaurant-header">
            <h2 className="restaurant-name"> {name} </h2>
            <div className="restaurant-meta">
                {rating && <span className="rating"> {rating} </span>}
                {deliveryTime && <span> {deliveryTime} mins </span>}
            </div>
            {cuisine && <p className="restaurant-cuisines">{cuisine.join(", ")}</p>}
        </div>
    );
};

export default RestaurantHeader;
