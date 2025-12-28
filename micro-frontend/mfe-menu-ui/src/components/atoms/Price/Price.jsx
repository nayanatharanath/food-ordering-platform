import "./Price.css";

const Price = ({ value }) => {
    if (value === null || value === undefined) return null;

    return (
        <span className="price">
            ₹{Number(value).toFixed(2)}
        </span>
    )
}

export default Price