import {Buttons} from "./Buttons"
import { useDispatch, useSelector } from "react-redux"
import { Minus, Plus, Reset } from "./types"

export const Section = () => {
    const counter = useSelector((state) => state)
    const dispatch = useDispatch() 
    
    
    const handleIncreace = () => {
        dispatch(Plus())
    }

    const handleDecreace = () => {
        dispatch(Minus())
    }

    const handleReset = () => {
        dispatch(Reset())
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