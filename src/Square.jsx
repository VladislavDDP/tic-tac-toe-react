import "./App.css"
import React from "react"

class Square  extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null
        }
            
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({value: 'X'})} className="square">{this.state.value}</button> 
            </div>
        )
    }
}

export default Square