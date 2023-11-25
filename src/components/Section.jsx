import { useState } from "react"
import {Buttons} from "./Buttons"

export const Section = () => {
    const [number, setChangeNumber] = useState(0)

    const increace = () => {
            setChangeNumber(number + 3)
    }

    const decreace = () => {
        if (number > 0) {
            setChangeNumber(number - 2)
        } else if (number < 0) {
            setChangeNumber(0)
        }
    }

    const reset = () => {
        setChangeNumber(0)
    }

    return(
        <section>
            <div className="zero">
                {number}
            </div>

            <Buttons increace={increace} decreace={decreace} reset={reset}/>
        </section>
    )
}