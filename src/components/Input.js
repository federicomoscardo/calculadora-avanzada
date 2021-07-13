import {useState} from 'react'

function Input(props) {
    let [num, setNum] = useState(0)

    return (
        <div>
            <input type="number" onChange={setValue} value={num}></input>
            <button onClick={clearInput}>Clear</button>
        </div>
    )
}

export default Input
