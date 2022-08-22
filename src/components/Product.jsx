import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import {cartActions} from '../store/cart-slice'
import {productImages1} from '../images'
import PhotoGallery from './photoGallery'
import './Product.css'
import PhotoGalleryMobile from './PhotoGalleryMobile'

    export const DUMMY_PRODUCT = 
        {id:'p1', 
        name:'Fall limited Edition Sneakers' , 
        description:`These low-profile sneakers are you perfect casual wear companion . Featuringa durablerubber outer sole, they'll withstand everyting the weather can offer.`,
        price: 125,
        discount: 50 ,
        oldPrice: 250 ,
        quantity : 0 ,
        photos:productImages1 
        }
    

function Product(prop) {
    const [productQuantity , setProductQuantity] = React.useState(0)
    const dispatch = useDispatch()

    const addItemToCart = ()=>{
        dispatch(cartActions.addItemToCart({
            id: DUMMY_PRODUCT.id ,
            price: DUMMY_PRODUCT.price , 
            quantity: productQuantity , 
            totalPrice: DUMMY_PRODUCT.price , 
            name : DUMMY_PRODUCT.name
        }))
        setProductQuantity(0)
    }

    const addOneItemQuantity = ()=>{
       setProductQuantity(productQuantity => productQuantity + 1)
    }
    const removeOneItemQuantity = ()=>{
        if(productQuantity > 0)
        {
            setProductQuantity(productQuantity => productQuantity - 1)
        }
    }

  return (
    <Fragment>
    <section className='Product-section'>
        <div className='product-photos'>
            <div className ='photoGallery-status'>
                <PhotoGallery  />
            </div>
            <div className='photoGallery-mobile-status'>
                <PhotoGalleryMobile />
            </div>
        </div>
        <div className='product-details'>
            <p className='company-name'>SNEAKER COMPANY</p>
            <h2 className='product-title'>{prop.product.name}</h2>
            <p className='product-description'>
                {prop.product.description}
            </p>
            <div className='price-details'>
                <p className='price'>{prop.product.price.toFixed(2)}$</p>
                <p className='discount'>{prop.product.discount}%</p>
            </div>
            
            <p className='old-price'>${prop.product.oldPrice.toFixed(2)}</p>
            <div className='purchase-detail'>
                <div className='quantity-details'>
                        <button onClick={removeOneItemQuantity} >-</button>
                        <p  className='quantity'>{productQuantity}</p>
                        <button onClick={addOneItemQuantity}>+</button>
                </div>
                <button onClick={addItemToCart} className='cart-button'>
                    <svg className='cart-icon' width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fill-rule="nonzero"/></svg>
                    Add to cart
                </button>
            </div>
        </div>
        
    </section>
    {/* <PhotoGallery1/> */}
    </Fragment>
  )
}

export default Product