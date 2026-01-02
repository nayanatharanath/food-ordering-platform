import Button from "shared/Button";
import PropTypes from "prop-types";
import "./AddToCartButton.css"
const AddToCartButton = ({ item }) => {
    const handleAddToCart = () => {
        window.dispatchEvent(
            new CustomEvent("ADD_TO_CART", {
                detail: item,
            })
        );
    };

    return (
        <div className="add-to-cart-button">
            <Button onClick={handleAddToCart}>Add</Button>
        </div>
    );
};

AddToCartButton.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        isVeg: PropTypes.bool.isRequired,
    }).isRequired,
};

export default AddToCartButton;
