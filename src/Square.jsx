import "./App.css"

const Square = (props) => {
    return (
        <div>
            <button className="square">{props.number}</button> 
        </div>
    )
}

export default Square