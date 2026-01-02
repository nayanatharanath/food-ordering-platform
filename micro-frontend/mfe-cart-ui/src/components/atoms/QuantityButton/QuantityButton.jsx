import "./QuantityButton.css";

import React from 'react'
import PropTypes from 'prop-types'

const QuantityButton = ({ label, onClick, disabled }) => {
    return (
        <button
            className="quantity-button"
            onClick={onClick}
            disabled={disabled}
            aria-label={label}
        >
            {label}
        </button>
    )
}

QuantityButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default QuantityButton
