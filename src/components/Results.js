import {connect} from 'react-redux'

function Results(props) {

    return (
        <div>
            <p>Addition: {Number(props.input1) + Number(props.input2)} </p>
            <p>Subtraction: {Number(props.input1) - Number(props.input2)} </p>
            <p>Multiplication: {Number(props.input1) * Number(props.input2)} </p>
            <p>Division: {Number(props.input2) === 0 ? 'Math Error!' : Number(props.input1) / Number(props.input2)} </p>
            <p>Pow: {Math.pow(Number(props.input1), Number(props.input2))} </p>
            <p>Sqrt Input1: {Number(props.input1) < 0 ? 'Math Error!' : Math.sqrt(Number(props.input1))} </p>
            <p>Sqrt Input2: {Number(props.input2) < 0 ? 'Math Error!' : Math.sqrt(Number(props.input2))} </p>
            <p>Hypotenuse: {Math.sqrt(Math.pow(Number(props.input1), 2) + Math.pow(Number(props.input2), 2))} </p>
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
