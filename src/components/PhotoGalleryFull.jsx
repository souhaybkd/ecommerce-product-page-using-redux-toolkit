import React from 'react'
import { DUMMY_PRODUCT } from './Product'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../store/ui-slice'
import { iconClose ,iconPrevious , iconNext } from '../images'
import './PhotoGalleryFull.css'

const PhotoGalleryFull = () => {

  const productImages = DUMMY_PRODUCT.photos
  const [mainProductImage , setMainProductImage] = useState(productImages[0][0])   
  const imageSlider = productImages.map((image , index) =>{
          const clickhandler1 = ()=>{
              setMainProductImage(productImages[index][0])               
          } 
  return(
      <img src={image[1]} className={ productImages[index].includes(mainProductImage) ? 'active-image' :''} onClick={clickhandler1}  />
  )
  })
  const productMainImages = []
  for(let i = 0 ; i < productImages.length ; i++){
    productMainImages.push(productImages[i][0])
  }

  function nextImageHandler(){
    console.log(productMainImages)

    setMainProductImage(prev => {
      if(productMainImages.indexOf(prev) + 1 === productMainImages.length ){
        return(
          productMainImages[0]
        )
      }
      return(
        productMainImages[productMainImages.indexOf(prev) + 1]
      )
    } )
  }
  function previousImageHandler(){
    setMainProductImage(prev => {
      if(productMainImages.indexOf(prev)- 1 < 0){
        return(
          productMainImages[productMainImages.length - 1]
        )
      }
      return(
        productMainImages[productMainImages.indexOf(prev) - 1]
      )
    } )
  }

  const dispatch = useDispatch()
  function hideFullGallery(){
    dispatch(uiActions.fullPhotoGalleryToggle())
  }

  
  return (
    <div className='photo-gallery-fullscreen'>
        <div className='main-product-image'>
          <button className='close-button' onClick={hideFullGallery}>
            <img src={iconClose} />
          </button>
          <button className='icons-button previous-icon' onClick={previousImageHandler}>
            <img src={iconPrevious} />
          </button>
            <img className='product-image' src={mainProductImage} alt="" />
          <button className='icons-button next-icon' onClick={nextImageHandler}>
            <img src={iconNext} />
          </button>
        </div>
        <div className='products-images-fullscreen'>
          {imageSlider}
        </div>
    </div>
  )
}

export default PhotoGalleryFull