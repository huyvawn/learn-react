import { useState } from "react";

function Game() {
    let[count,setCount]= useState(0);
    const startGame = ()=>{
        console.log("game is started");
        setCount(count+1);
    };
    return(
        <div className="row justify-content-end">
        <div className="border col-6">
            <h1>Game started {count} time</h1>
            <StartGame onPlayerClick={startGame} />
        </div>
        </div>
    )
}

function StartGame({onPlayerClick}) {
    return(
        <div >
            <button onClick={onPlayerClick}>Start</button>
        </div>
    )
}
export default Game;