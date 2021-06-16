import React, { useState, useEffect } from 'react'
import "./SignUp.scss";
import Input from '../../BasicComponents/Input/Input';
import nameIcon from "../../Assets/nameIcon/svg/nameIcon.svg"; // name icon
import emailIcon from "../../Assets/emailIcon/svg/emailIcon.svg"; // email icon
import passwordIcon from "../../Assets/passwordIcon/svg/passwordIcon.svg"; // password icon
import logo from "../../Assets/logo/svg/logo.svg";
import arrowRight from "../../Assets/arrow-right/svg/arrowRight.svg";
const SignUp = () => {
    const [formState, setForm] = useState({
        Name: { value: '', valid: false },
        Email: { value: '', valid: false },
        Password: { value: '', valid: false },
        TermsAndConditions: { value: false, valid: false },
        formValid: false
    })



    const checkValidity = (type, value) => {
        switch (type) {
            case "Name":
                return value === "George Costanza" ? true : false;
                break;

            case "Email":
                return value === "georgie_boy@yahoo.com" ? true : false;
                break;
            case "Password":
                return value === "cosmo kramer" ? true : false;
                break;
            case "TermsAndConditions":
                return value;
                break;
            default:
                return true;
                break;
        }
    }

    const checkFormValidity = (formdata) => {
        for (let item in formdata) {
            if (item != "formValid" && !formdata[item].valid) {
                return false;
            }
        }
        return true;
    }

    const handleChange = ({ type, value }) => {
        let currentFormState = { ...formState };
        delete currentFormState[`${type}`];
        currentFormState[`${type}`] = { value: value, valid: checkValidity(type, value) }; // set state for the user input
        currentFormState.formValid = checkFormValidity(currentFormState); // calculate form validity
        setForm(currentFormState)

    }





    return (
        <>
            <div className="container">
                <div className="left">
                    <div className="header">
                        <div className="header-title">
                            <h1>Let's Get Started.</h1>
                        </div>
                        <div className="header-content">
                            <p>Discover the best places in the world <span>at your fingertips!</span></p>
                        </div>
                    </div>

                    <div className="form">
                        <form>
                            <Input
                                change={handleChange}
                                value={formState.Name.value}
                                icon={nameIcon}
                                input={{
                                    type: 'text',
                                    placeholder: 'Name',
                                    for: 'Name',
                                    errorMessage: 'Name already taken',
                                    valid: formState.Name.valid
                                }}
                            />
                            <Input
                                change={handleChange}
                                value={formState.Email.value}
                                icon={emailIcon}
                                input={{
                                    type: 'email',
                                    placeholder: 'Email',
                                    for: 'Email',
                                    errorMessage: 'Email already in use',
                                    valid: formState.Email.valid


                                }}
                            />

                            <Input
                                change={handleChange}
                                value={formState.Password.value}
                                icon={passwordIcon}
                                input={{
                                    type: 'password',
                                    placeholder: 'Password',
                                    for: 'Password',
                                    errorMessage: 'Password must be at least 6 characters long.',
                                    valid: formState.Password.valid

                                }}
                            />
                            <div className="tc">

                                <input checked={formState.TermsAndConditions.value}
                                    onChange={() => handleChange({ type: 'TermsAndConditions', value: !formState.TermsAndConditions.value })}
                                    type="checkbox"
                                    id="terms"
                                    name="tc"
                                    value="Terms and conditions" />
                                <label htmlFor="terms">I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
                    </label>
                            </div>

                            <button className="submit" style={{ opacity: formState.formValid ? 1 : 0.5 }} >
                                <div>
                                    SIGN UP
                                </div>
                                <div>
                                    <img src={arrowRight} />
                                </div> </button>
                        </form>
                    </div>
                </div>

                <div className="right">
                    <div>
                        <img src={logo}  alt="st company logo"/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignUp;