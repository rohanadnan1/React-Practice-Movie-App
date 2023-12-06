import { useContext } from "react"
import { UserContext } from "../../App"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { fetchMovies, fetchShows } from "./fetchData"
import { Card } from "./Card"
import { Button } from "../../components/Button"





export enum btnDisplay {
    None = '',
    Movies = 'Movies',
    TVShows = 'TV Shows'
}



export const Home = () => {
    
    const {name, setBtnDisplay, btnDisplay: btn} = useContext(UserContext)
    
    
    const [displayBtn, setDisplayBtn] = useState<btnDisplay>(btnDisplay.None)
    
    const {data: movieData, isLoading: movieLoading} = useQuery({queryKey: ['movies'], queryFn: fetchMovies})
    const {data: showData, isLoading: showLoading} = useQuery({queryKey: ['shows'], queryFn: fetchShows})

    if(!name){
        return(
            <>
                <div className='h-auto mt-2 flex flex-col gap-3 items-center justify-center'>
                    <h1 className="font-bold text-red-700">Please login to continue!</h1>
                </div>
            </>
        )
    }

    const moviesClicked = () => {
        setDisplayBtn(btnDisplay.Movies)
        setBtnDisplay(true)
    }

    const showsClicked = () => {
        setDisplayBtn(btnDisplay.TVShows)
        setBtnDisplay(true)
    }

   



    if(movieLoading || showLoading){
        return(
            <>
                <div className='h-auto mt-2 flex flex-col gap-3 items-center justify-center'>
                    <h1 className="font-bold text-red-700">Loading...</h1>
                </div>
            </>
        )
    }

    const nameLength: number = name.split(' ').length
    const nameArr: string[] = name.split(' ')

    if(name && nameLength >= 3){
        return(
            <>
                <div className='h-auto flex flex-col gap-3 mt-2 items-center justify-center'>
                    <h1 className="font-bold text-green-700">Welcome {nameArr.slice(0, nameLength-1).join(' ').toUpperCase()}!</h1>
                </div>

                <div className='h-auto flex gap-6 mt-4 items-center justify-center'>
                    <button 
                    className={`border-2 p-2 rounded border-black ${displayBtn === btnDisplay.Movies ? 'bg-blue-500' : ''}`}
                    onClick={moviesClicked}
                    >Movies</button>
                    <button 
                    className={`border-2 p-2 rounded border-black ${displayBtn === btnDisplay.TVShows ? 'bg-blue-500' : ''}`}
                    onClick={showsClicked}
                    >TV Shows</button>
                </div>

                <div className='h-auto flex flex-wrap gap-3 mt-4 items-center justify-center'>
                    {displayBtn === btnDisplay.Movies ? <Card key={movieData?.id} data={movieData.results} displayBtn={displayBtn} /> : ''}
                    {displayBtn === btnDisplay.TVShows ? <Card key={showData?.id} data={showData.results} displayBtn={displayBtn} /> : ''}
                </div>

                <div>
                    <Button value='1'/>
                    <Button value='2'/>
                    <Button value='3'/>
                </div>
            </>
        )
    }

    if(name && nameLength === 2){
        return(
            <>
                <div className='h-auto flex flex-col gap-3 mt-2 items-center justify-center'>
                    <h1 className="font-bold text-green-700">Welcome {nameArr.slice(0, nameLength - 1).join(' ').toUpperCase()}!</h1>
                </div>

                <div className='h-auto flex gap-6 mt-4 items-center justify-center'>
                    <button 
                    className={`border-2 p-2 rounded border-black ${displayBtn === btnDisplay.Movies ? 'bg-blue-500' : ''}`}
                    onClick={moviesClicked}
                    >Movies</button>
                    <button 
                    className={`border-2 p-2 rounded border-black ${displayBtn === btnDisplay.TVShows ? 'bg-blue-500' : ''}`}
                    onClick={showsClicked}
                    >TV Shows</button>
                </div>

                <div className='h-auto flex flex-wrap gap-3 mt-4 items-center justify-center'>
                    {displayBtn === btnDisplay.Movies ? <Card key={movieData.id} data={movieData.results} displayBtn={displayBtn} /> : ''}
                    {displayBtn === btnDisplay.TVShows ? <Card key={showData.id} data={showData.results} displayBtn={displayBtn} /> : ''}
                </div>

            </>
        )
    }

    if(name && nameLength === 1){
        return(
            <>
                <div className='h-auto flex flex-col gap-3 mt-2 items-center justify-center'>
                    <h1 className="font-bold text-green-700">Welcome {name}!</h1>
                </div>

                <div className='h-auto flex gap-6 mt-4 items-center justify-center'>
                    <button 
                    className={`border-2 p-2 rounded border-black ${displayBtn === btnDisplay.Movies ? 'bg-blue-500' : ''}`}
                    onClick={moviesClicked}
                    >Movies</button>
                    <button 
                    className={`border-2 p-2 rounded border-black ${displayBtn === btnDisplay.TVShows ? 'bg-blue-500' : ''}`}
                    onClick={showsClicked}
                    >TV Shows</button>
                </div>

                <div className='h-auto flex flex-wrap gap-3 mt-4 items-center justify-center'>
                    {displayBtn === btnDisplay.Movies ? <Card key={movieData.id} data={movieData.results} displayBtn={displayBtn} /> : ''}
                    {displayBtn === btnDisplay.TVShows ? <Card key={showData.id} data={showData.results} displayBtn={displayBtn} /> : ''}
                </div>
            </>
        )
    }

    if(btn){
        return(
            <>
                <div>
                    <Button value='1'/>
                    <Button value='2'/>
                    <Button value='3'/>
                </div>
            </>
        )
    }
     
}