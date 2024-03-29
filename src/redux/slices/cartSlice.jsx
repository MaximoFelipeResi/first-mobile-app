import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        user: "ResiMaxi",
        items: [],
        total: null,
        updateAt: "",
    }
}

export const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const foundItem = state.value.items.find(item => item.id === action.payload.id);

            if (foundItem) {
                foundItem.quantity++;
            } else {
                state.value.items.push({ ...action.payload, quantity: 1 });
            }
            state.value.total = state.value.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            state.value.updateAt = new Date().toLocaleString();
        },
        removeItem: (state, action) => {
            const itemIndex = state.value.items.findIndex(item => item.id === action.payload.id);

            if (itemIndex !== -1) {
                const removedItem = state.value.items.splice(itemIndex, 1)[0];
                state.value.total -= removedItem.price * removedItem.quantity;
                state.value.updateAt = new Date().toLocaleString();
            }
        }
    },
})

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;