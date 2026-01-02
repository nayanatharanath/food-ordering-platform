import Price from "../../atoms/Price/Price.jsx";
import VegBadge from "../../atoms/VegBadge/VegBadge.jsx";

const MenuItemInfo = ({ name, description, price, isVeg }) => {
    return (
        <div className="menu-item-info">
            <div className="menu-item-title-row">
                <VegBadge isVeg={isVeg} />
                <h4 className="menu-item-name"> {name} </h4>
            </div>
            {description && (
                <p className="menu-item-description"> {description} </p>
            )}
            <Price value={price} />
        </div>
    )
}

export default MenuItemInfo;