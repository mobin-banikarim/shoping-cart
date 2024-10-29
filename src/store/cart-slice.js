import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : [],
        totalQuantity : 0,
    },
    reducers : {
        addToCart(state , action) {
            let newItem = action.payload;
            let existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({
                    id : newItem.id,
                    price : newItem.price,
                    quantity : 1,
                    totalPrice : newItem.price,
                    name : newItem.title,
                    image : newItem.image
                })
                state.totalQuantity++;
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                state.totalQuantity++;
            }
        },
        removeToCart(state , action) {
            let itemToRemove = action.payload;
            let existingItem = state.items.find(item => item.id === itemToRemove.id);

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== itemToRemove.id);
                state.totalQuantity--;
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - itemToRemove.price;
                state.totalQuantity--;
            }
        }
    }
})

export let cartActions = cartSlice.actions;
export default cartSlice.reducer;