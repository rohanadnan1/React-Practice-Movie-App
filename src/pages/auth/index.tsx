import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { UserContext } from '../../App';
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';

interface formData {
    name: string
}


export const Auth = () => {

    const {setName} = useContext(UserContext)

    const navigate = useNavigate()

    const schema = yup.object().shape({
        name: yup.string().required('Name is required')
    })

    const {handleSubmit, register} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: formData) => {
        if(data.name){
            setName(data.name)
            navigate('/')
            localStorage.setItem('name', data.name)
        }
    }

    return(
        <>
            <div className='h-96 flex flex-col gap-3 items-center justify-center'>
            <h1 className='font-bold text-blue-900'>To help you find your favourite movie we need to know your name!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex gap-16'>
                <input type="text" className='border-4 p-2 rounded-md' placeholder="Enter your name" {...register('name')} />
                <input type="submit" className='border-4 p-2 rounded-md w-24 cursor-pointer' />
            </form>
            </div>
        </>
    )
}