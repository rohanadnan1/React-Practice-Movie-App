import { createSlice } from '@reduxjs/toolkit'

type tvShows = {
    id: string;
    title: string;
}

const TvShowSlice = createSlice({
    name: 'tvShows',
    initialState: [] as tvShows[],
    reducers:{
        addTvShow: (state, action) => {
            const showExist = state.find(tvShow => tvShow.id === action.payload.id)
            if(!showExist){
                state.push(action.payload)
            }
        },
        removeTvShow: (state, action) => {
            return state.filter(tvShow => tvShow.id !== action.payload)
        }
    }  
})

export const {addTvShow, removeTvShow} = TvShowSlice.actions
export default TvShowSlice.reducer
