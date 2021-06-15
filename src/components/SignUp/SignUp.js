import React, {useState, useEffect} from 'react'
import "./SignUp.scss";
import Input from '../../BasicComponents/Input/Input';
import nameIcon from "../../Assets/nameIcon/svg/nameIcon.svg"; // name icon
import emailIcon from "../../Assets/emailIcon/svg/emailIcon.svg"; // name icon
import passwordIcon from "../../Assets/passwordIcon/svg/passwordIcon.svg"; // name icon

const SignUp = () => {
    const [formState, setForm] = useState({
        Name : {value : 'George Costanza', valid : true},
        Email: {value : 'georgie_boy@yahoo.com', valid : true},
        Password: {value : 'asdadsasd', valid : true},
        TermsAndConditions : {value  : false, valid : false},
        formValid : false
    })



    const checkValidity = (type, value) => {
        console.log(type, value)
        switch(type){
            case "Name":
                return value === "George Costanza" ? true : false;
                break;

            case "Email":
                return value === "georgie_boy@yahoo.com" ? true : false;
                break;
            case "Password":
                return value.length > 6 ? true : false;
                break;
            case "TermsAndConditions":
                return value;
                break;
            default:
                return true;
                break;
        }
    }

    const checkFormValidity = () => {
        debugger
        for(let item in formState){
            if (item != "formValid" && !formState[item].valid){
                return false;
            }
        }
        return true;
    }

    const handleChange = ({type,value}) => {
        let currentFormState = {...formState};
        delete currentFormState[`${type}`];
        currentFormState[`${type}`] = {value : value, valid: checkValidity(type, value)};
        console.log(currentFormState[`${type}`])
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
                                valid : formState.Name.valid
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
                                valid : formState.Email.valid

                                
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
                                valid : formState.Password.valid

                            }}
                        />
                        <div className="tc">

                            <input checked={formState.TermsAndConditions.value} 
                            onChange={() => handleChange({type: 'TermsAndConditions', value : !formState.TermsAndConditions.value})} 
                            type="checkbox" 
                            id="terms" 
                            name="tc" 
                            value="Terms and conditions" />
                            <label htmlFor="terms">I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
                    </label>
                        </div>

                        <button className="submit"  style={{ opacity: formState.formValid ? 1 : 0.5 }} >
                            <div>
                                SIGN UP
                                </div>
                            <div>
                                <img src="https://marvel-live.freetls.fastly.net/canvas/2021/6/a51494c195b84dfca496a3b4d6eb81b8?quality=95&fake=.svg&width=108" />
                            </div> </button>
                            </form>
                    </div>
                </div>

                <div className="right">
                    <div>
                    <img src="https://marvel-live.freetls.fastly.net/canvas/2021/6/8813f4b2402c4f8b8a38e737b8946608?quality=95&fake=.svg&width=108" />  
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignUp;