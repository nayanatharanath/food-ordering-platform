
const VegBadge = ({ isVeg }) => {
    return (
        <span className={`veg-badge ${isVeg ? 'veg' : 'non-veg'}`}
            aria-label={isVeg ? 'Vegetarian' : 'Non Vegetarian'}
        />
    )
}

export default VegBadge