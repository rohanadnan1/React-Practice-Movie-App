import { Link } from "react-router-dom"
import { SearchBar } from "./SearchBar"
import { useContext } from "react"
import { UserContext } from "../App"

export const Navbar = () => {

    const {name} = useContext(UserContext)

    return(
        <>
            <div className="h-20 bg-slate-400 flex justify-between items-center italic font-bold">
                <div className="pt-2 flex pl-2 gap-2 h-12 mb-2">
                    {name ? <Link className="border-2 p-1 rounded" to="/">Home</Link>: null}
                    {name ? <Link className="border-2 p-1 rounded" to='/rated'>Favourites</Link>: null}
                </div>
                <div className="pt-4 h-12 pr-2 mb-2 flex gap-8">
                    {name ? <SearchBar /> : null}
                    <Link className="border-2 p-3 flex items-center rounded h-9" to='/auth'>Login</Link>
                </div>
            </div>
        </>
    )
}