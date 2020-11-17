
import React, {Component} from "react"
import Board from "./Board";

export default class Playing extends Component {
    constructor(props) {
        super(props);
        this.state= {
            xIsPlaying: true,
            stepNumber: 0,
            moves: [
               { squares: Array(9).fill(null) }
            ]    
        }
    }
    handleClick(i) {
        const moves = this.state.moves.slice(0, this.state.stepNumber + 1);
        const turn = moves[moves.length-1];
        const squares = turn.squares.slice();
        squares[i] = this.state.xIsPlaying ? 'X' : 'O';
        this.setState({
            moves: moves.concat({
                squares: squares
            }),
            xIsPlaying: !this.state.xIsPlaying,
            stepNumber: moves.length
        });
    }

    render(){
        const actions = this.state.moves;
        const current = actions[this.state.stepNumber];

        return (
            <div className="playing">

               <div className="playing-board">
                   <Board onClick={(i)=>this.handleClick(i)}
                   squares={current.squares}/>
                </div> 
                
            </div>
        )
    }
}
