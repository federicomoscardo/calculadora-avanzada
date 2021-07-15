
import {connect} from 'react-redux'

function Input(props) {
    
    function clearInput() {
        props.dispatch({type: "SET_VALUE", payload: {value: 0, inputNum: props.numInput}})
    }



    return (
        <div>
            <input type="number" 
                onChange={setValue} 
                value={props.value}
            />
            <button onClick={clearInput}>Clear</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(Input)
