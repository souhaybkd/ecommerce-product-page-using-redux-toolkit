import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../store/ui-slice'
import { DUMMY_PRODUCT } from './Product'
import './PhotoGallery.css'

const PhotoGallery = () => {
    const productImages = DUMMY_PRODUCT.photos
  const [mainProductImage, setMainProductImage] = useState(DUMMY_PRODUCT.photos[0][0])
  const imageSlider = productImages.map((image, index) => {
    const clickhandler1 = () => {
      setMainProductImage(DUMMY_PRODUCT.photos[index][0])
    }
    return (
      <img src={image[1]} className={DUMMY_PRODUCT.photos[index].includes(mainProductImage) ? 'active-image' : ''} onClick={clickhandler1} />
    )
})

const dispatch = useDispatch()
function showFullGallery(){
  dispatch(uiActions.fullPhotoGalleryToggle())
  console.log(1)
}
  return (
    <div className='photo-gallery'>
        <img className='product' src={mainProductImage} alt='mainProductImage' onClick={showFullGallery}/>
        <div className='products-images'>
          {imageSlider}
      </div>
    </div>
  )
}

export default PhotoGallery