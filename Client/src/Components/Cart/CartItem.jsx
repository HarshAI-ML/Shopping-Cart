//Component dealing with each product in My cart
import './CartItem.css';
function CartItem({ item, changeQuantity, removeItem }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.description} className="cart-item-image" />

      <div>
        <h3>{item.description}</h3>
        <p>Price: ₹{item.price}</p>

        <div className="quantity-controls"> 
          <button onClick={() => changeQuantity(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => changeQuantity(item.id, 1)}>+</button>
        </div>

        <p>Total: ₹{item.price * item.quantity}</p>

        <button className='remove-button' onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
 