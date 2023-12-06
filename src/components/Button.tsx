import { useContext } from "react"
import { UserContext } from "../App"
import { AuthData } from "../App"

interface ButtonProps {
    value: string
}

export const Button = (props: ButtonProps) => {

    const {btnDisplay} = useContext<AuthData>(UserContext)


    return(
        <>
            <button className={btnDisplay ? 'block': 'hidden'}>{props.value}</button>
        </>
    )
}