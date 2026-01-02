import "./QuantityControl.css";

import React from 'react'
import PropTypes from 'prop-types'
import QuantityButton from "../../atoms/QuantityButton/QuantityButton.jsx";

const QuantityControl = ({ itemId, quantity }) => {

    const emitDecrease = () => {
        window.dispatchEvent(
            new CustomEvent('DECREASE_QUANTITY', {
                detail: { itemId }
            })
        )
    }

    const emitIncrease = () => {
        window.dispatchEvent(
            new CustomEvent('INCREASE_QUANTITY', {
                detail: { itemId }
            })
        )
    }

    return (
        <div className="quantity-control">
            <QuantityButton label="-" onClick={emitDecrease} />
            <span className="quantity-value"> {quantity} </span>
            <QuantityButton label="+" onClick={emitIncrease} />
        </div>
    )
}

QuantityControl.propTypes = {
    itemId: PropTypes.number,
    quantity: PropTypes.number
}

export default QuantityControl
