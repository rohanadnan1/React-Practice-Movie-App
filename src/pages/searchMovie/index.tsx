import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useState } from "react"


export const SearchMovie = () => {

    const name = useSelector((state: any)=> state.selected.value)
    console.log(name)
    const [shows, setShows] = useState<string[]>([])
    const [movies, setMovies] = useState<string[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const fetchShowsSearch = async () => {


        const res = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
        {
            headers: {
                Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODg0MzQ4OWNmNzQ2MDBhMjNjODNjZWQwOTMwMmMyNSIsInN1YiI6IjY0ZWZiYTY3NzJjMTNlMDBlMjVlZTg0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gHOmuTyFx3NdA66WAImFRY8xbK-gfW0eLQ0Ly-V32sQ'
            }
        })
            // console.log(res.json())
            const allShows =  await res.json()
            setShows(allShows.results)
            setLoading(false)
        }


        const fetchMovies = async () => {

            const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
            {
                headers: {
                    Authorization: 
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODg0MzQ4OWNmNzQ2MDBhMjNjODNjZWQwOTMwMmMyNSIsInN1YiI6IjY0ZWZiYTY3NzJjMTNlMDBlMjVlZTg0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gHOmuTyFx3NdA66WAImFRY8xbK-gfW0eLQ0Ly-V32sQ'
                },
            })
                // console.log(res.json())
                const allMovies = await res.json()
                setMovies(allMovies.results)
                setLoading(false)
            }

        useEffect(()=>{
            fetchShowsSearch()
            fetchMovies()
            setLoading(true)
        }, [])


    if(loading){
        return(
            <>
                <div className='h-auto mt-2 flex flex-col gap-3 items-center justify-center'>
                    <h1 className="font-bold text-red-700">Loading...</h1>
                </div>
            </>
        )
    }



    return(
        <>
            {shows.map((item: any)=>{
        if(item.name.toLowerCase() === name.toLowerCase()){
            return(
                <>
                    <div className="h-full w-full flex flex-col gap-2 mt-6 items-center justify-center pb-3">
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="poster" className='h-80' />
                        <h1 className='font-bold text-3xl text-center'>{item.name}</h1>
                        <p className='text-lg font-bold text-green-950'>Rating: {Math.round(Number(item.vote_average))}</p>
                        <p className="text-center w-[80%] font-bold">{item.overview}</p>
                    </div>
                </>
            )
        }
    })}

    {movies.map((item: any)=>{
        if(item.title.toLowerCase() === name.toLowerCase()){
            return(
                <>
                    <div className="h-full flex flex-col gap-2 mt-6 w-full items-center justify-center pb-3">
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="poster" className='h-80' />
                        <h1 className='font-bold text-3xl text-center'>{item.title}</h1>
                        <p className='text-lg font-bold text-blue-900'>Rating: {Math.round(Number(item.vote_average))}</p>
                        <p className="text-center w-[80%] font-bold">{item.overview}</p>
                    </div>
                </>
            )
        }
    })}
        </>
    )

}