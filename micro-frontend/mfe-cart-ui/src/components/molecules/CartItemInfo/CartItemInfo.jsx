import "./CartItemInfo.css";

import React from 'react'
import PropTypes from 'prop-types'
import Price from "../../atoms/Price/Price.jsx";

const CartItemInfo = ({ name, price, quantity }) => {
    const subtotal = price * quantity;
    return (
        <div className="cart-item-info">
            <p className="cart-item-name"> {name} </p>
            <div className="cart-item-pricing">
                <Price value={price} />
                <span className="cart-item-multiply">x {quantity} </span>
                <Price value={subtotal} />
            </div>
        </div>
    )
}

CartItemInfo.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
}

export default CartItemInfo
