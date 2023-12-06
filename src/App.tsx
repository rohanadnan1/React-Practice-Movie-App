import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Rated } from './pages/rated'
import { Auth } from './pages/auth'
import {  createContext } from 'react'
import { useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { Store } from './store/store'
import { SearchMovie } from './pages/searchMovie'


export interface AuthData {
  name?: string
  setName: React.Dispatch<React.SetStateAction<string>>;
  btnDisplay: boolean,
  setBtnDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  allMovies: any,
  setAllMovies: React.Dispatch<React.SetStateAction<any>>;
  allShows: any,
  setAllShows: React.Dispatch<React.SetStateAction<any>>;
  selectedMovie: any,
  setSelectedMovie: React.Dispatch<React.SetStateAction<any>>;
}

export const UserContext = createContext<AuthData>({} as AuthData)
const queryClient = new QueryClient()

function App() {
 
  const [name, setName] = useState('')
  const [btnDisplay, setBtnDisplay] = useState(false as boolean)
  const [allMovies, setAllMovies] = useState([] as any)
  const [allShows, setAllShows] = useState([] as any)
  const [selectedMovie, setSelectedMovie] = useState('')

  return (
    <>
    <Provider store={Store}>
    <QueryClientProvider client={queryClient}>
    <UserContext.Provider value={{name, setName, btnDisplay,selectedMovie, setSelectedMovie, setBtnDisplay, allMovies, setAllMovies, allShows, setAllShows}}>
     <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/rated" element={<Rated/>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path={`/search`} element={<SearchMovie/>}/>
        </Routes>
     </Router>
    </UserContext.Provider>
    </QueryClientProvider>
    </Provider>
    </>
  )
}

export default App
