import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items : [],
    } ,
    reducers:{
        addItemToCart(state , action){
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            if(!existingItem){
                state.items.push({
                    id: newItem.id , 
                    price: newItem.price , 
                    quantity: newItem.quantity , 
                    totalPrice: newItem.price , 
                    name : newItem.name
                })  
            }
            else{
                existingItem.quantity = existingItem.quantity + newItem.quantity
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart(state,action){

            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            state.items = state.items.filter(item => item.id !== id)
        }
    }
})
export const cartActions = cartSlice.actions
export default cartSlice