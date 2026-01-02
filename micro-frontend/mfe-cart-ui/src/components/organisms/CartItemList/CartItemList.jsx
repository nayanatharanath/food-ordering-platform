import "./CartItemList.css";

import React from "react";
import PropTypes from "prop-types";
import CartItemCard from "../CartItemCard/CartItemCard";

const CartItemList = ({ items }) => {
    if (!items || items.length === 0) {
        return <div className="cart-empty-state">Your cart is empty</div>;
    }

    return (
        <div className="cart-item-list">
            {items.map((item) => (
                <CartItemCard key={item.id} item={item} />
            ))}
        </div>
    );
};

CartItemList.propTypes = {
    items: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
};

export default CartItemList;
