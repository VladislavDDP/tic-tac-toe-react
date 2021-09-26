import "./App.css"
import React from "react"

class Square  extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value
        }
            
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.onClickField()} className="square">{this.props.value}</button> 
            </div>
        )
    }
}

export default Square