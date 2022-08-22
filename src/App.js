import React from 'react'
import { useSelector } from 'react-redux'
import MainHeader from './components/MainHeader'
import Product from './components/Product'
import Cart from './components/cart/Cart'
import PhotoGalleryFull from './components/PhotoGalleryFull'
import './app.css'

const DUMMY_PRODUCT = 
{id:'p1', 
name:'Fall limited Edition Sneakers' , 
description:`These low-profile sneakers are you perfect casual wear companion . Featuringa durablerubber outer sole, they'll withstand everyting the weather can offer.`,
price: 125,
discount: 50 ,
oldPrice: 250 ,
}


function App() {

  const showCart = useSelector(state => state.ui.cartIsVisible)

  const [cartProduct, setCartProduct] = React.useState([])

  const [productQuantity, setProductQuantity] = React.useState(0)

  const removeItem = () => {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1)
    }
    return
  }


  const hidePhotoGalleryFull = useSelector(state => state.ui.fullPhotoGalleryIsVisible)

  return (
    <div>
      <MainHeader />
      <Product
        product={DUMMY_PRODUCT}
        productQuantity={productQuantity}
      />
      {showCart &&
        <Cart
          product={DUMMY_PRODUCT}
          productQuantity={productQuantity} />}
    {hidePhotoGalleryFull && <PhotoGalleryFull/>}
        
    </div>
  )
}

export default App