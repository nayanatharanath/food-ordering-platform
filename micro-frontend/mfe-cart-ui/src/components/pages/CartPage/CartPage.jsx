import { useState, useEffect } from "react";
import CartItemList from "../../components/organisms/CartItemList/CartItemList.jsx";
import CartSummary from "../../components/organisms/CartSummary/CartSummary.jsx";
import "./CartPage.css"

// const CartPage = () => {
//     const [cartItems, setCartItems] = useState([]);
//     useEffect(() => {
//         const handleAddToCart = (event) => {
//             const item = event.detail;

//             setCartItems((prevItems) => {
//                 const existingItem = prevItems.find((i) => i.id === item.id);

//                 if (existingItem) {
//                     return prevItems.map((i) =>
//                         i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//                     );
//                 }

//                 return [...prevItems, { ...item, quantity: 1 }];
//             });
//         };

//         const handleIncrease = (event) => {
//             const { itemId } = event.detail;
//             setCartItems((prevItems) =>
//                 prevItems.map((item) =>
//                     item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
//                 )
//             );
//         };

//         const handleDecrease = (event) => {
//             const { itemId } = event.detail;

//             setCartItems((prevItems) =>
//                 prevItems
//                     .map((item) =>
//                         item.id === itemId
//                             ? {
//                                 ...item,
//                                 quantity: item.quantity - 1,
//                             }
//                             : item
//                     )
//                     .filter((item) => item.quantity > 0)
//             );
//         };
//         window.addEventListener("ADD_TO_CART", handleAddToCart);
//         window.addEventListener("INCREASE_QUANTITY", handleIncrease);
//         window.addEventListener("DECREASE_QUANTITY", handleDecrease);
//         return () => {
//             window.removeEventListener("ADD_TO_CART", handleAddToCart);
//             window.removeEventListener("INCREASE_QUANTITY", handleIncrease);
//             window.removeEventListener("DECREASE_QUANTITY", handleDecrease);
//         };
//     }, []);

//     const itemTotal = cartItems.reduce(
//         (total, item) => total + item.price * item.quantity,
//         0
//     );

//     const taxes = itemTotal * 0.05;
//     const deliveryFee = cartItems.length > 0 ? 30 : 0;
//     const grandTotal = itemTotal + taxes + deliveryFee;

//     return (
//         <div className="cart-page">
//             <CartItemList items={cartItems} />
//             <CartSummary
//                 itemTotal={itemTotal}
//                 taxes={taxes}
//                 deliveryFee={deliveryFee}
//                 grandTotal={grandTotal}
//             />
//         </div>
//     );
// };

// export default CartPage;

const CartPage = () => {
    const [cartItems, setCartItems] = useState(
        window.__CART__ || []
    );

    useEffect(() => {
        window.__CART__ = window.__CART__ || [];

        const handleAddToCart = (event) => {
            const item = event.detail;

            const existingItem = window.__CART__.find(
                (i) => i.id === item.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                window.__CART__.push({
                    ...item,
                    quantity: 1,
                });
            }

            // Sync UI with global store
            setCartItems([...window.__CART__]);
        };

        const handleIncrease = (event) => {
            const { itemId } = event.detail;

            window.__CART__ = window.__CART__.map((item) =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

            setCartItems([...window.__CART__]);
        };

        const handleDecrease = (event) => {
            const { itemId } = event.detail;

            window.__CART__ = window.__CART__
                .map((item) =>
                    item.id === itemId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0);

            setCartItems([...window.__CART__]);
        };

        window.addEventListener('ADD_TO_CART', handleAddToCart);
        window.addEventListener('INCREASE_QUANTITY', handleIncrease);
        window.addEventListener('DECREASE_QUANTITY', handleDecrease);

        return () => {
            window.removeEventListener('ADD_TO_CART', handleAddToCart);
            window.removeEventListener('INCREASE_QUANTITY', handleIncrease);
            window.removeEventListener('DECREASE_QUANTITY', handleDecrease);
        };
    }, []);

    const itemTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const taxes = itemTotal * 0.05;
    const deliveryFee = cartItems.length ? 30 : 0;
    const grandTotal = itemTotal + taxes + deliveryFee;

    return (
        <div className="cart-page">
            <CartItemList items={cartItems} />

            <CartSummary
                itemTotal={itemTotal}
                taxes={taxes}
                deliveryFee={deliveryFee}
                grandTotal={grandTotal}
            />
        </div>
    );
};

export default CartPage;