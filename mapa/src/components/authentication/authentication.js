import React from 'react'

// import Login from './login/login'
import Signup from './signup/signup'


// import './authentication.scss';

const authentication = () => {
    return(
        <div className="loginWrapper">
            {/*<Login/>*/}
            {/*<span>or</span>*/}
            <Signup/>
        </div>
    )
}

export default authentication