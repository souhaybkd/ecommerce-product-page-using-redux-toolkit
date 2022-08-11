import React from 'react'
import { useState , useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../store/ui-slice'
import './PhotoGalleryFull.css'


import Product1 from '../images/image-product-1.jpg'
import Product2 from '../images/image-product-2.jpg'
import Product3 from '../images/image-product-3.jpg'
import Product4 from '../images/image-product-4.jpg'

import Product1thmb from '../images/image-product-1-thumbnail.jpg'
import Product2thmb from '../images/image-product-2-thumbnail.jpg'
import Product3thmb from '../images/image-product-3-thumbnail.jpg'
import Product4thmb from '../images/image-product-4-thumbnail.jpg'

const MainImages = [Product1,Product2,Product3,Product4]

const PhotoGalleryFull = () => {

  const [currentPhoto , setCurrentPhoto] = React.useState(MainImages[0])

function nextImageHandler(){
    setCurrentPhoto(currentPhoto => {
      console.log(MainImages.indexOf(currentPhoto) + 1)
      if(MainImages.indexOf(currentPhoto) + 1 === MainImages.length ){
        return(
          MainImages[0]
        )
      }
      return(
        MainImages[MainImages.indexOf(currentPhoto) + 1]
      )
    } )

}
function previousImageHandler(){
  setCurrentPhoto(currentPhoto => {
    if(MainImages.indexOf(currentPhoto)- 1 < 0){
      return(
        MainImages[MainImages.length - 1]
      )
    }
    return(
      MainImages[MainImages.indexOf(currentPhoto) - 1]
    )
  } )
}


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
// const changeHandler = [changeTo1Handler() , changeTo2Handler() , changeTo3Handler() , changeTo4Handler()]

  const dispatch = useDispatch()
  function hideFullGallery(){
    dispatch(uiActions.fullPhotoGalleryToggle())
  }



  return (
    <div className='photo-gallery-fullscreen'>

        <div className='main-product-image'>
          <button className='close-button' onClick={hideFullGallery}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
          </button>
          <button className='icons-button previous-icon' onClick={previousImageHandler}>
            <svg className='icon '  width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
          </button>
          <img className='product-image' src={currentPhoto} alt="" />
          <button className='icons-button next-icon' onClick={nextImageHandler}>
            <svg className='icon ' width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
          </button>
        </div>
        <div className='products-images-fullscreen'>
            <img src={Product1thmb} className={imagesStatus.image1} onClick={changeTo1Handler} alt="" />
            <img src={Product2thmb} className={imagesStatus.image2} onClick={changeTo2Handler} alt="" />
            <img src={Product3thmb} className={imagesStatus.image3} onClick={changeTo3Handler} alt="" />
            <img src={Product4thmb} className={imagesStatus.image4} onClick={changeTo4Handler} alt="" />
        </div>
    </div>
  )
}

export default PhotoGalleryFull