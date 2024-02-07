import {Buttons} from "./Buttons"
import { useDispatch, useSelector } from "react-redux"

export const Section = () => {
    const counter = useSelector((state) => state)
    const dispatch = useDispatch() 
    
    
    const handleIncreace = () => {
        dispatch({
            type: "plus"
        })
    }

    const handleDecreace = () => {
        dispatch({
            type: "minus"
        })
    }

    const handleReset = () => {
        dispatch({
            type: "reset"
        })
    }

    return(
        <section>
            <div className="zero">
                {counter}
            </div>

            <Buttons increace={handleIncreace} decreace={handleDecreace} reset={handleReset}/>
        </section>
    )
}