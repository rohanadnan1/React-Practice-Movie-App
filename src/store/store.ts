import {configureStore} from '@reduxjs/toolkit'
import movieReducer from './moviesSlice'
import tvShowReducer from './tvShowSlice'
import selectReducer from './selectedSlice'

export const Store = configureStore({
    reducer: {
        movies: movieReducer,
        tvShows: tvShowReducer,
        selected: selectReducer
    }
})