import React, {useState} from 'react'
import "./input.scss"
import correctIcon from "../../Assets/correctIcon/correctIcon.svg"
const Input = props => {
    const [state, setstate] = useState({
        touched : false,

    })
    return (
        <div className="inputContainer">
        <div className="input">
            <img src={props.icon} alt="" />
            <input 
                type={props.input.type} 
                placeholder={props.input.placeholder} 
                value={props.value} 
                onChange={(e) => props.change({type:props.input.for, value : e.target.value })}
                />
            <img src={correctIcon} alt="verified input" style={{display : props.input.valid ? 'block' : 'none'}} />
        </div>
        {/* {props.input.valid && <span>{props.input.errorMessage}</span>} */}
        </div>
    )
}

export default Input;