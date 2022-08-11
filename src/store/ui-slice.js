import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:'ui',
    initialState:{
        cartIsVisible: false , 
        fullPhotoGalleryIsVisible : false ,
        navigOnMobileIsVisible : false
    },
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible
        },
        fullPhotoGalleryToggle(state){
            state.fullPhotoGalleryIsVisible = !state.fullPhotoGalleryIsVisible
        },
        navigOnMobileToggle(state){
            state.navigOnMobileIsVisible = !state.navigOnMobileIsVisible
        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice