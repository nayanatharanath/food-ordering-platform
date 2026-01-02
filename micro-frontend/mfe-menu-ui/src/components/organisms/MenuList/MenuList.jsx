import PropTypes from "prop-types";
import "./MenuList.css"
import MenuItemCard from "../MenuItemCard/MenuItemCard.jsx";

const MenuList = ({ items }) => {
    return (
        <div className="menu-list">
            {items?.map((item) => (
                <MenuItemCard key={item.id} item={item} />
            ))}
        </div>
    );
};

MenuList.propTypes = {
    items: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        price: PropTypes.number.isRequired,
        isVeg: PropTypes.bool.isRequired,
        imageUrl: PropTypes.string,
    }),
};

export default MenuList;
