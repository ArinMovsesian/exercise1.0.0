import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: "items",
    initialState: {
        items: [],
        copyItem: [],
        loading: false,
    },
    reducers: {
        fetchItems(state, action) {
            state.items = action.payload.items;
            state.copyItem = action.payload.items;
        },
        loading(state, action) {
            state.loading = action.payload.status;
        },
        searchItem(state, action) {
            if(action.payload.value == undefined || action.payload.value == '') {
                state.items = state.copyItem;
            } else {
                state.items = state.copyItem.filter((item) => item.title.includes(action.payload.value) );
            }
        },
        filterItem(state, action) {
            if(action.payload.value == 'all') {
                state.items = state.copyItem;
            } else {
                state.items = state.copyItem.filter((item) => item.title == action.payload.value);
            }
        },
        autoLogin() {
            
        }
    }
});
export const itemsActions = itemsSlice.actions;
export default itemsSlice;