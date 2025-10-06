// import React, { useContext } from "react";
// import "./MyCart.css";
// import { Context } from "../Utilities/Context/CartContext";

// function MyCart() {
//   const { cart, changeQuantity, removeItem, total_price } = useContext(Context);

//   // ✅ Checkout handler
//   const handleCheckout = async () => {
//     const orderData = {
//       items: cart.map((item) => ({
//         id: item.id,
//         quantity: item.quantity,
//       })),
//       total: total_price,
//     };

//     try {
//       const response = await fetch("http://localhost:5000/api/checkout", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await response.json();
//       console.log("✅ Server Response:", result);
//       alert("Order placed successfully!");
//     } catch (error) {
//       console.error("❌ Checkout failed:", error);
//       alert("Checkout failed. Please try again.");
//     }
//   };

//   if (cart.length === 0) {
//     return <div className="cart-empty">Your cart is empty 🛒</div>;
//   }

//   return (
//     <div className="cart-container">
//       <h2 className="cart-heading">My Cart</h2>

//       <div className="cart-items">
//         {cart.map((item) => (
//           <div className="cart-item" key={item.id}>
//             <img src={item.image} alt={item.description} className="cart-item-image" />

//             <div className="cart-item-details">
//               <h3>{item.description}</h3>
//               <p>Price: ₹{item.price}</p>

//               <div className="quantity-controls">
//                 <button onClick={() => changeQuantity(item.id, -1)}>-</button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => changeQuantity(item.id, 1)}>+</button>
//               </div>

//               <p className="item-total">Total: ₹{item.price * item.quantity}</p>

//               <button
//                 className="remove-button"
//                 onClick={() => removeItem(item.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="cart-summary">
//         <h3>Total Price: ₹{total_price}</h3>
//         <button className="checkout-button" onClick={handleCheckout}>
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default MyCart;

/* The component which binds together CartItem and CartSummary Component 
 through Props.
*/
import React, { useContext } from "react";
import { Context } from "../../Utilities/Context/CartContext";
import CartItem from "../../Components/Cart/CartItem";
import CartSummary from "../../Components/Cart/CartSummary";
import "./MyCart.css";

function MyCart() {
  const { cart, changeQuantity, removeItem, total_price } = useContext(Context);

  if (cart.length === 0)
     return <div className="cart-empty">Your cart is empty 🛒</div>;

  return (
    <div className="cart-container">
      <div className="cart-heading">
        <h2>My Cart</h2>
      </div>

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          changeQuantity={changeQuantity}
          removeItem={removeItem}
        />
      ))}

      <CartSummary total={total_price} />
    </div>
  );
}

export default MyCart;
