import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { cartActions } from '../../store/cart-slice'
import Picture1thmb from '../../images/image-product-1-thumbnail.jpg'
import './CartItem.css'


function CartItem(prop) {
  
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const removeItemFromCart = ()=>{
    dispatch(cartActions.removeItemFromCart(prop.id))
    console.log(cartItems)
    console.log(prop.id)

  }

  return (
    <>
    <div className='cart-items'>
        <img className='' src={Picture1thmb} alt=''/>
        <div className='item-details'>
            <h3>{prop.name}</h3>
            <p>${prop.price} x {prop.quantity} <span>${prop.quantity * prop.price}</span></p>
        </div>
        <button onClick={removeItemFromCart}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 29 29">
                    <path fill="#afaeae" d="M10 3v3h9V3a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1z" class="color000 svgShape"/>
                    <path fill="#afaeae" d="M4 5v1h21V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1zM6 8l1.812 17.209A2 2 0 0 0 9.801 27H19.2a2 2 0 0 0 1.989-1.791L23 8H6zm4.577 16.997a.999.999 0 0 1-1.074-.92l-1-13a1 1 0 0 1 .92-1.074.989.989 0 0 1 1.074.92l1 13a1 1 0 0 1-.92 1.074zM15.5 24a1 1 0 0 1-2 0V11a1 1 0 0 1 2 0v13zm3.997.077a.999.999 0 1 1-1.994-.154l1-13a.985.985 0 0 1 1.074-.92 1 1 0 0 1 .92 1.074l-1 13z" class="color000 svgShape"/>
                </svg>            
        </button>
    </div>
    <button className='checkout-button'>Checkout</button>
    </>
  )
}

export default CartItem