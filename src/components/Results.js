import {connect} from 'react-redux'

function Results(props) {

    return (
        <div>
            <p>Addition: {Number(props.input1) + Number(props.input2)} </p>
            <p>Subtraction: {Number(props.input1) - Number(props.input2)} </p>
            <p>Multiplication: {Number(props.input1) * Number(props.input2)} </p>
            <p>Division: {Number(props.input2) === 0 ? 0 : Number(props.input1) / Number(props.input2)} </p>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        input1: state.input1,
        input2: state.input2
    }
}

export default connect(mapStateToProps)(Results)
