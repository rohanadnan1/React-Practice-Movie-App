import { btnDisplay } from "."
import { addMovie } from "../../store/moviesSlice"
import { addTvShow } from "../../store/tvShowSlice"
import {useDispatch} from 'react-redux'

export interface displayData {
    id: number,
    title?: string,
    name?: string,
    poster_path: string,
    overview: string,
    vote_average: number,
    release_date: string
}

interface CardProps {
    data: displayData[],
    displayBtn: btnDisplay
}


export const Card = (props: CardProps) => {

    const dispatch = useDispatch()
    const addMovies = (data:displayData) => {
        const updatedData = {...data, id: data.id.toString(), title: data.title || ''}
        dispatch(addMovie(updatedData))
    }

    const addShows = (data:displayData) => {
        dispatch(addTvShow(data))
    }

    if(props.data){
        return(
            <>
            {props.data.map((item, index) => {
                return(
                    <>
                        <div key={index} className='h-auto mt-3 w-64 flex flex-col gap-2 items-center justify-center pb-3'>
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="poster" className='h-40' />
                            <h1 className='font-bold text-lg text-center'>{props.displayBtn == btnDisplay.Movies ? item.title : item.name}</h1>
                            <p className='text-sm font-bold'>Rating: {Math.round(Number(item.vote_average))}</p>
                            <button 
                            onClick={props.displayBtn == btnDisplay.Movies ? () => addMovies(item) : () => addShows(item)}
                            className="text-sm border border-black rounded p-2 bg-red-500 h-10">Add to Favourites</button>
                        </div>
                    </>
                )
            })}
            </>
        )
    }

}