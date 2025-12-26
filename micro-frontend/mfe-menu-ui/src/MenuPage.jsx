import { lazy, Suspense } from "react"

const Button = lazy(() => import("shared/Button"))

export default function MenuPage() {

  const addToCart = (item) => {
    window.dispatchEvent(
      new CustomEvent("ADD_TO_CART", {
        detail: item
      })
    )
  }

  return (
    <div>
      <h2>Menu Page</h2>
      <Suspense fallback={<div>Loading Button...</div>}>
        <Button onClick={() => addToCart({ name: "Rice" })}>
          Add to Cart
        </Button>
      </Suspense>
      <ul>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
      </ul>
    </div>
  );
}
