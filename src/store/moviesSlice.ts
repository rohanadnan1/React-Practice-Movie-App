import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Movie = {
    title: string;
    id: string;
}

const initialState: any[] = []

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        addMovie: (state, action: PayloadAction<any>) => {
            const movieExist = state.find((movie: Movie) => movie.id === action.payload.id)
            if(!movieExist){
                state.push(action.payload)
            }
        },
        removeMovie: (state, action: PayloadAction<number>) => {
            return state.filter(movie => movie.id !== action.payload)
        },
    }

    
})

export const {addMovie, removeMovie} = movieSlice.actions
export default movieSlice.reducer