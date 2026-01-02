import React from "react";
import PropTypes from "prop-types";
import Price from "../../atoms/Price/Price.jsx";
import Button from "shared/Button";

const CartSummary = ({ itemTotal, taxes, deliveryFee, grandTotal }) => {
    return (
        <div className="cart-summary">
            <div className="summary-row">
                <span>Item Total</span>
                <Price value={taxes} />
            </div>
            <div className="summary-row">
                <span>Delivery Fee</span>
                <Price value={deliveryFee} />
            </div>

            <div className="summary-row grand-total">
                <span>Grand Total</span>
                <Price value={grandTotal} />
            </div>

            <Button className="checkout-button">Checkout</Button>
        </div>
    );
};

CartSummary.propTypes = {
    itemTotal: PropTypes.number,
    taxes: PropTypes.number,
    deliveryFee: PropTypes.number,
    grandTotal: PropTypes.number,
};

export default CartSummary;
