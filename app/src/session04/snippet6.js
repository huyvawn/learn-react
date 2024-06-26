import { useState } from "react";

function Counter() {
    let [like, setLike] = useState(10);
    return(
        <div>
            <button onClick={() =>{
                setLike(like+1)
            }}>👍 {like}</button>
        </div>
    );
}

export default Counter;