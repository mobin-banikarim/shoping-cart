import { createSlice } from "@reduxjs/toolkit";

let uiSlice = createSlice({
    name : 'ui',
    initialState : { cartIsVisible : false },
    reducers : {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        showCart(state) {
            state.cartIsVisible = true;
        },
        hiddenCart(state) {
            state.cartIsVisible = false;
        }
    }
});

export let uiActions = uiSlice.actions;
export default uiSlice.reducer;