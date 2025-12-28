import React from 'react'

const RestaurantHeader = ({ name, rating, cuisine, deliveryTime }) => {
    return (
        <div className='restaurant-header'>
            <h2 className='restaurant-name'> {name} </h2>
        </div>
    )
}

export default RestaurantHeader
