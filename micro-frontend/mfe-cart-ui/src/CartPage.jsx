import { useEffect, useState } from "react";

export default function CartPage() {
    const [item, setItem] = useState([]);
    useEffect(() => {
        const handler = (event) => {
            setItem((prev) => [...prev, event.detail])
        };
        window.addEventListener("ADD_TO_CART", handler);
        return () => {
            window.removeEventListener("ADD_TO_CART", handler)
        }
    }, []);

    return (
        <div>
            <h2>Cart</h2>
            {item.length === 0 && <p>Cart is empty!</p>}
            <ul>
                {item.map((item, idx) => (
                    <li key={idx}> {item.name} </li>
                ))}
            </ul>
        </div>
    )
}