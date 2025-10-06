//Component dealing with Total_price and checkout api call and corresponding UI
import './CartSummary.css'
import { Context } from '../../Utilities/Context/CartContext';
import { useContext } from 'react';
function CartSummary({ total }) {
  const { cart, changeQuantity, removeItem, total_price } = useContext(Context);

  const handleCheckout = async () => {
    const orderData = {
      items: cart.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
      total: total_price,
    };

    try {
      // Api call for checkout 
      const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();
      console.log("✅ Server Response:", result);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("❌ Checkout failed:", error);
      alert("Checkout failed. Please try again.");
    }
  };
  return (
    <div className="cart-summary">
         <h3>Total Price: ₹{total}</h3>
         <button className="checkout-button" onClick={handleCheckout}>
          Proceed to Checkout
         </button>
    </div>
  );
}

export default CartSummary;
