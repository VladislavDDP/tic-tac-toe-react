import Square from "./Square"
import './App.css';
import React from "react";

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.status = `Next player: ${!this.xIsNext ? 'O' : 'X'}`
        this.xIsNext = true
        this.state = {
            squares: Array(9).fill(null)
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = !this.xIsNext ? 'O' : 'X';
        this.setState({squares: squares});
        this.xIsNext = !this.xIsNext;
    }
    
    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClickField={() => this.handleClick(i) } />
    }    

    render() {
        this.status = `Next player: ${!this.xIsNext ? 'O' : 'X'}`
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