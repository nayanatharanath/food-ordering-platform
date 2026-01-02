import React from 'react';
import RestaurantHeader from "../../organisms/RestaurantHeader/RestaurantHeader.jsx";
import MenuList from '../../organisms/MenuList/MenuList.jsx';
import './MenuPage.css';

// const Button = lazy(() => import("shared/Button"));

const MenuPage = () => {
    const restaurant = {
        name: "Spice Garden",
        rating: 4.3,
        cuisines: ["North Indian", "Chinese"],
        deliveryTime: 30,
    };
    const menuItems = [
        {
            id: 1,
            name: "Paneer Butter Masala",
            description: "Creamy tomato gravy with soft paneer cubes",
            price: 249,
            isVeg: true,
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Chicken Biryani",
            description: "Hyderabadi style dum biryani",
            price: 299,
            isVeg: false,
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Butter Naan",
            description: "Soft naan brushed with butter",
            price: 49,
            isVeg: true,
            imageUrl: "https://via.placeholder.com/150",
        },
    ];
    return (
        <div className="menu-page">
            <RestaurantHeader
                name={restaurant.name}
                rating={restaurant.rating}
                cuisine={restaurant.cuisines}
                deliveryTime={restaurant.deliveryTime}
            />
            <MenuList items={menuItems} />
        </div>
    );
};

export default MenuPage;
