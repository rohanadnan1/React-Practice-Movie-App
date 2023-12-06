import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelected } from "../store/selectedSlice";



interface formData {
    movieName: string
}


export const SearchBar = () => {

    
    const dispatch = useDispatch()

    
    

     const schema = yup.object().shape({
        movieName: yup.string().required('Movie name is required')
    })

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })

 

    const navigate = useNavigate()

    const onSubmit = (data: formData) => {
            dispatch(setSelected(data.movieName))
            navigate('/search')
    }


    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="border border-black rounded p-1 outline-none" type="text" {...register('movieName')} />
                <button className="border bg-green-700 border-green-700 rounded p-1 cursor-pointer" type="submit">Search</button>
            </form>
        </>
    )
}