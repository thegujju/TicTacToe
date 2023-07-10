import React, { useState } from 'react'
import Square from './Square'

function Board() {
    const [state,setState] = useState(Array(9).fill(null))
    const [isXTurn,setIsXTurn] = useState(true)

    const checkWinner = () =>{
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let logic of winnerLogic){
            const [a,b,c] = logic
            if (state[a] != null && state[a]===state[b] && state[a]===state[c]){
                return state[a]
            }
        }

        let nu = 0
        for (let index = 0; index < state.length; index++) {
            if (state[index] == null){
                nu = nu+1
            }
            
        }

        if (nu===0){
            return 'No One'
        }

        return false
    }

    const winner = checkWinner()

    const clickHandler = (index) =>{
        if (state[index] !== null)return

        const copy = [...state]
        copy[index] = isXTurn ? "X" : "O"
        setState(copy)
        setIsXTurn(!isXTurn)
    }
    const ResetButton = () =>{
        setState(Array(9).fill(null))
        setIsXTurn(true)
    }


  return (
    <div className='board-container'>
        
        {winner ? (<> 
            {winner} Won The Game 
            <button onClick={ResetButton}>
                Play Again
            </button> 
            </>)
            :
        (<>
        <h3>{isXTurn ? "X" : "O"} Turn </h3>
        <div className='board-row'>
            <Square onClick = {()=>clickHandler(0)} value={state[0]}/>
            <Square onClick = {()=>clickHandler(1)} value={state[1]}/>
            <Square onClick = {()=>clickHandler(2)} value={state[2]}/>
        </div>
        <div className='board-row'>
            <Square onClick = {()=>clickHandler(3)} value={state[3]}/>
            <Square onClick = {()=>clickHandler(4)} value={state[4]}/>
            <Square onClick = {()=>clickHandler(5)} value={state[5]}/>
        </div>
        <div className='board-row'>
            <Square onClick = {()=>clickHandler(6)} value={state[6]}/>
            <Square onClick = {()=>clickHandler(7)} value={state[7]}/>
            <Square onClick = {()=>clickHandler(8)} value={state[8]}/>
        </div>
        </>
        )}
        
    </div>
  )
}

export default Board