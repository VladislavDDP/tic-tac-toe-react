import Square from "./Square"
import './App.css';
import React from "react";

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.status = 'Next player: X'
        this.state = {
            squares: Array(9).fill(null)
        }
    }
    
    
    renderSquare(i) {
        return <Square number={i} />
    }    

    render() {
        return (
            <div>
                <div className="status">{this.status}</div>
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
            </div>
        )
    }
}

export default Board