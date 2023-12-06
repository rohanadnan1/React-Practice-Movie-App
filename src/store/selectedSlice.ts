import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: ''
}


const selectedSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        setSelected: (state, action) => {
           state.value = action.payload
        }
    }
})

export const {setSelected} = selectedSlice.actions
export default selectedSlice.reducer