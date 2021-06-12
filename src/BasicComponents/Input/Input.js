import "./input.scss"
const Input = props => {

    return (
        <div className="input">
            <img src={props.icon} alt="" />
            <input type={props.input.type} placeholder={props.input.placeholder} />
        </div>
    )
}

export default Input;