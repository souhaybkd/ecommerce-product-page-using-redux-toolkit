import React from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../store/ui-slice'
import './PhotoGallery.css'

import Product1 from '../images/image-product-1.jpg'
import Product2 from '../images/image-product-2.jpg'
import Product3 from '../images/image-product-3.jpg'
import Product4 from '../images/image-product-4.jpg'

import Product1thmb from '../images/image-product-1-thumbnail.jpg'
import Product2thmb from '../images/image-product-2-thumbnail.jpg'
import Product3thmb from '../images/image-product-3-thumbnail.jpg'
import Product4thmb from '../images/image-product-4-thumbnail.jpg'
import { useEffect } from 'react'


const PhotoGallery = () => {
  const [currentPhoto , setCurrentPhoto] = React.useState(Product1)

  const active = 'active-image'
  const notActive = ''
  const initiaImageslStatus = {
    image1 : notActive ,
    image2 : notActive ,
    image3 : notActive ,
    image4 : notActive 
  }
  const [imagesStatus , setimagesStatus] = React.useState(initiaImageslStatus)
useEffect(()=>{
  setimagesStatus({
    image1 : active ,
    image2 : notActive ,
    image3 : notActive ,
    image4 : notActive 
  })
},[])


  const changeTo1Handler = () =>{
    setCurrentPhoto(Product1)
    setimagesStatus({
      image1 : active ,
      image2 : notActive ,
      image3 : notActive ,
      image4 : notActive 
    })
    console.log(imagesStatus);
  }
  const changeTo2Handler = () =>{
    setCurrentPhoto(Product2)
    setimagesStatus({
      image1 : notActive ,
      image2 : active ,
      image3 : notActive ,
      image4 : notActive 
    })
    console.log(imagesStatus);
  }
  const changeTo3Handler = () =>{
    setCurrentPhoto(Product3)
    setimagesStatus({
      image1 : notActive ,
      image2 : notActive ,
      image3 : active ,
      image4 : notActive 
    })
    console.log(imagesStatus);
  }
  const changeTo4Handler = () =>{
    setCurrentPhoto(Product4)
    setimagesStatus({
      image1 : notActive ,
      image2 : notActive ,
      image3 : notActive ,
      image4 : active 
    })
    console.log(imagesStatus);
  }
  const dispatch = useDispatch()
  function showFullGallery(){
    dispatch(uiActions.fullPhotoGalleryToggle())
  }

  return (
    <div className='photo-gallery'>
        <img className='product' src={currentPhoto} alt="" onClick={showFullGallery}/>
        <div className='products-images'>
            <img src={Product1thmb} className={imagesStatus.image1} onClick={changeTo1Handler} alt="" />
            <img src={Product2thmb} className={imagesStatus.image2} onClick={changeTo2Handler} alt="" />
            <img src={Product3thmb} className={imagesStatus.image3} onClick={changeTo3Handler} alt="" />
            <img src={Product4thmb} className={imagesStatus.image4} onClick={changeTo4Handler} alt="" />
        </div>
    </div>
  )
}

export default PhotoGallery