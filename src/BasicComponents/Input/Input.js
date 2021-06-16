import React, { useState } from 'react'
import "./input.scss"
import correctIcon from "../../Assets/correctIcon/correctIcon.svg"
import errorIcon from "../../Assets/error/svg/error.svg"
import colors from "../../colors";
const errorColor = "#FF0066"
const noError = "#C5D3E8";

const Input = props => {
    const [dirty, setDirty] = useState(false)
    const [touched, setTouched] = useState(false)
    const [valid, setValid] = useState(undefined);
    const [Focus, setFocus] = useState(false);
    const handleChange = (value) => {
        if (!touched) {
            setTouched(true);
        }
        if (!dirty && value.length > 0) {
            setDirty(true);
        }
        props.change({ type: props.input.for, value: value })
    }

    const handleBlur = () => {
        setFocus(false);

        if (dirty) {
            if (!props.input.valid) {
                setValid(true);
            }
            else {
                setValid(false);
            }
        }
    }

    const handleFocus = () => {
        setFocus(true);
        setValid(undefined);
    }

    const setInputStyle = () => {
        if(props.input.valid || Focus || dirty){
            return {
                color: colors.secondary,
                opacity: 1
            }

        }else{

            return  {
                color: colors.border,
                opacity: .6
            }
        }
    }

    return (
        <div className="inputContainer">
            <div
                className="input"
                style={
                    {
                        borderColor: dirty && valid ? errorColor : noError,
                        background: props.input.valid ? colors.inputFilledbackground : dirty?colors.inputFilledbackground :  colors.inputBackground
                    }}
                onBlur={handleBlur}
                onFocus={handleFocus}
            >
                <img src={props.icon} alt="" />
                <input
                    style={{setInputStyle}}
                    type={props.input.type}
                    placeholder={props.input.placeholder}
                    value={props.value}
                    onChange={(e) => handleChange(e.target.value)}
                />
                <img src={correctIcon} alt="verified input" style={{ display: props.input.valid ? 'block' : 'none' }} />
                <img src={errorIcon} alt="verified input" style={{ display: !props.input.valid && !Focus && dirty ? 'block' : 'none' }} />

            </div>
            {dirty && valid && <span>{props.input.errorMessage}</span>}
        </div>
    )
}

export default Input;