import { useSelector } from "react-redux"
import { displayData } from "../home/Card"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeMovie } from "../../store/moviesSlice"
import { removeTvShow } from "../../store/tvShowSlice"

type rootState = {
    movies: displayData[]
    tvShows: displayData[]
}

export const Rated = () => {

    const movies: displayData[] = useSelector((state: rootState) => state.movies)
    const shows: displayData[] = useSelector((state: rootState) => state.tvShows)
    const [showMovies, setShowMovies] = useState(false as boolean)
    const [showShows, setShowShows] = useState(false as boolean)
    console.log(movies)
    const dispatch = useDispatch()

    if(!movies){
        return(
            <>
                <div className='h-auto mt-2 flex flex-col gap-3 items-center justify-center'>
                    <h1 className="font-bold text-red-700">You have no favourites!</h1>
                </div>
            </>
        )
    }

    const moviesClicked = () => {
        setShowMovies(false)
        setShowShows(true)
    }

    const showsClicked = () => {
        setShowMovies(true)
        setShowShows(false)
    }

    const removeMovieFromState = (data: number) => {
        dispatch(removeMovie(data))
    }

    const removeShow = (data: number) => {
        dispatch(removeTvShow(data))
    }

    return(
        <>
                <h1 className="font-bold text-center mt-2 mb-2 text-lg">You have <span className="text-red-800 text-3xl">{movies.length}</span> Favourite Movies and <span className="text-red-800 text-3xl">{shows.length}</span> Favourite TV Shows in your list.</h1>

                <div className='h-auto flex gap-6 mt-4 items-center justify-center'>
                    <button 
                    className={`border-2 p-2 rounded border-black ${showMovies ? 'bg-blue-500': ''} `}
                    onClick={showsClicked}
                    >Movies</button>
                    <button 
                    className={`border-2 p-2 rounded border-black ${showShows ? 'bg-blue-500' : ''}`}
                    onClick={moviesClicked}
                    >TV Shows</button>
                </div>
        <div className="flex flex-wrap w-full">
            {showMovies && movies.map((item) => {
                return(
                    <div className="flex gap-2">
                        <div className='h-auto mt-3 w-64 flex flex-col gap-2 items-center justify-center pb-3'>
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="poster" className='h-40' />
                            <h1 className='font-bold text-lg text-center'>{item.title}</h1>
                            <p className='text-sm font-bold'>Rating: {Math.round(Number(item.vote_average))}</p>
                            <button 
                            onClick={()=>removeMovieFromState(item.id)}
                            className="border border-black rounded bg-red-400 text-xs p-2 font-bold">Remove</button>
                        </div>
                    </div>
                )
            })}

            {showShows && shows.map((item) => {
                console.log(item)
                return(
                    <div className="flex gap-2">
                        <div className='h-auto mt-3 w-64 flex flex-col gap-2 items-center justify-center pb-3'>
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="poster" className='h-40' />
                            <h1 className='font-bold text-lg text-center'>{item.name}</h1>
                            <p className='text-sm font-bold'>Rating: {Math.round(Number(item.vote_average))}</p>
                            <button 
                            onClick={()=>removeShow(item.id)}
                            className="border border-black rounded bg-red-400 text-xs p-2 font-bold">Remove</button>
                        </div>
                    </div>
                )
            })}
        </div>    
        </>
    )
}