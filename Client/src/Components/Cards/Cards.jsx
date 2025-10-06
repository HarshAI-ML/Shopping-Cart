import React, { useContext } from 'react'
import './Cards.css';
import { useNavigate } from 'react-router-dom'; 
import { Context } from '../../Utilities/Context/CartContext';

function Cards({id,  image, description, price }) {
  console.log("Card Render:", id, description);
  const {addToCart}=useContext(Context); //context referenced
  const navigate = useNavigate();
  const  handleclick=()=>{  // function defining flow after add to cart clicked
    const product = {
        id,
        name: description,  
        image,
        price
        };
    addToCart(product);     // calls the function defined in ContextProvider
    console.log(`${description} added to cart`);
    navigate('/mycart')
  }
  return (
    <div className='card-box'>
      <div className='card-content'>
        <div className='card-image'>
          <img src={image} alt="product" />
        </div>
        <p className='card-description'>{description}</p>
        <p className='card-price'>Price: ₹{price}</p>
        <button className='addtocartbutton' onClick={handleclick}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Cards
