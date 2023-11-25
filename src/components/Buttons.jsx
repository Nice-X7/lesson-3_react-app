export const Buttons = ({increace, decreace, reset}) => {
    return(
        <div className="buttons">
            <button className="blue" onClick={increace}>Увеличить</button>
            <button className="orange" onClick={decreace}>Уменьшить</button>
            <button className="gray" onClick={reset}>Сбросить</button>
        </div>
    )
}