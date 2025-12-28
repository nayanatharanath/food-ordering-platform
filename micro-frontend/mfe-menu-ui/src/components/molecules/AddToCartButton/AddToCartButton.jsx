import Button from 'shared/Button';

const AddToCartButton = ({ item }) => {

    const handleAddToCart = () => {
        window.dispatchEvent(
            new CustomEvent('ADD_TO_CART', {
                detail: item
            })
        )
    }

    return (
        <div className='add-to-cart-button'>
            <Button onClick={handleAddToCart}>
                Add
            </Button>
        </div>
    )
}

export default AddToCartButton