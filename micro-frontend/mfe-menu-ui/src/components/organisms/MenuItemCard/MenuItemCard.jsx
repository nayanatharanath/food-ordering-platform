import PropTypes from "prop-types";
import MenuItemInfo from "../../molecules/MenuItemInfo/MenuItemInfo.jsx";
import AddToCartButton from "../../molecules/AddToCartButton/AddToCartButton.jsx";
import "./MenuItemCard.css"

const MenuItemCard = ({ item }) => {
    const { name, description, price, isVeg, imageUrl } = item;

    return (
        <div className="menu-item-card">
            <div className="menu-item-content">
                <MenuItemInfo
                    name={name}
                    description={description}
                    price={price}
                    isVeg={isVeg}
                />
                <AddToCartButton item={item} />
            </div>
            {imageUrl && (
                <img src={imageUrl} alt={name} className="menu-item-image" />
            )}
        </div>
    );
};

MenuItemCard.propTypes = {
    items: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        price: PropTypes.number.isRequired,
        isVeg: PropTypes.bool.isRequired,
        imageUrl: PropTypes.string,
    }),
};

export default MenuItemCard;
