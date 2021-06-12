import React from 'react'
import "./SignUp.scss";
import Input from '../../BasicComponents/Input/Input';


const SignUp = () => {
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
                        <Input
                            icon="https://marvel-live.freetls.fastly.net/canvas/2021/6/4cdc9e30196b4b209f3e2a36005ee747?quality=95&fake=.svg&width=108"
                            input={{
                                type: 'text',
                                placeholder: 'Name'
                            }}
                        />
                        <Input
                            icon="https://marvel-live.freetls.fastly.net/canvas/2021/6/7ac500eb32d54840a74fcabcb514a1c5?quality=95&fake=.svg&width=108"
                            input={{
                                type: 'email',
                                placeholder: 'Email'
                            }}
                        />

                        <Input
                            icon="https://marvel-live.freetls.fastly.net/canvas/2021/6/c93a51eb8bc948698688d24e765003a6?quality=95&fake=.svg&width=108"
                            input={{
                                type: 'password',
                                placeholder: 'Password'
                            }}
                        />
                        <div className="tc">

                            <input type="checkbox" id="terms" name="tc" value="Terms and conditions" />
                            <label for="terms">I agree to the <span>Terms</span> and <span>Privacy Policy</span>.
                    </label>
                        </div>

                        <button className="submit">
                            <div>
                                SIGN UP
                                </div>
                            <div>
                                <img src="https://marvel-live.freetls.fastly.net/canvas/2021/6/a51494c195b84dfca496a3b4d6eb81b8?quality=95&fake=.svg&width=108" />
                            </div> </button>

                    </div>
                </div>

                <div className="right">

                </div>
            </div>
        </>
    )
}

export default SignUp;