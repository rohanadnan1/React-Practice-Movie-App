
export const fetchMovies = async () => {


    

    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    {
        headers: {
            Authorization: 
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODg0MzQ4OWNmNzQ2MDBhMjNjODNjZWQwOTMwMmMyNSIsInN1YiI6IjY0ZWZiYTY3NzJjMTNlMDBlMjVlZTg0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gHOmuTyFx3NdA66WAImFRY8xbK-gfW0eLQ0Ly-V32sQ'
        },
    })
        // console.log(res.json())
        const allMovies = await res.json()
        return allMovies
    }


export const fetchShows = async () => {


    

    const res = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
    {
        headers: {
            Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODg0MzQ4OWNmNzQ2MDBhMjNjODNjZWQwOTMwMmMyNSIsInN1YiI6IjY0ZWZiYTY3NzJjMTNlMDBlMjVlZTg0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gHOmuTyFx3NdA66WAImFRY8xbK-gfW0eLQ0Ly-V32sQ'
        }
    })
        // console.log(res.json())
        const allShows =  await res.json()
        return allShows
    }



