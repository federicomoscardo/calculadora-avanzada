
import {connect} from 'react-redux'

function Input(props) {
    
    function clearInput() {
        props.dispatch({type: "SET_VALUE", payload: {value: 0, inputNum: props.numInput}})
    }

    function setValue(e) {
        props.dispatch({type: "SET_VALUE", payload: {value: e.target.value, inputNum: props.numInput}})
    }



    return (
        <div>
            <input type="number" 
                onChange={setValue} 
                value={props.value}
                onFocus={() => props.value === 0 ? props.dispatch({type: "SET_VALUE", payload: {value: '', inputNum: props.numInput}}) : ''}
                onBlur={() => props.value === '' ? props.dispatch({type: "SET_VALUE", payload: {value: 0, inputNum: props.numInput}}) : ''}
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
