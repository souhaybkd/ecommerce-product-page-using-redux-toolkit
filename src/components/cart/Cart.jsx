import React from 'react'
import './Cart.css'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

function Cart(prop) {
  
  const cartItems = useSelector(state => state.cart.items)
  const cartItemslist = cartItems.map(item => {
    return(
      <li>
        <CartItem 
          key = {item.id}
          id = {item.id}
          name= {item.name}
          price = {item.price}
          quantity = {item.quantity} />
      </li>
    )
  })
  
  const showItem =  cartItems.length !== 0 ? cartItemslist : <p className='no-items'>Your cart is empty.</p>

  return (
    <div className='cart-section'>
        <p className='cart-name'>Cart</p>
        <ul >
          {showItem}
        </ul>
    </div>
  )
}

export default Cart