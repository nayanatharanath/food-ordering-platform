import "./CartItemCard.css";

import PropTypes from 'prop-types'
import CartItemInfo from "../../molecules/CartItemInfo/CartItemInfo.jsx";
import QuantityControl from "../../molecules/QuantityControl/QuantityControl";

const CartItemCard = ({ item }) => {
    return (
        <div className="cart-item-card">
            <CartItemInfo
                name={item.name}
                price={item.price}
                quantity={item.quantity}
            />
            <QuantityControl
                itemId={item.id}
                quantity={item.quantity}
            />
        </div>
    )
}

CartItemCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired,
}

export default CartItemCard
