import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import UserContext from '../../context';



const Signin = () => {
    const userService = useContext(UserContext);

    let redirectTimeout;
    // const [redirect, setRedirect] = useState(false);

    const [username, setUsername] = useState('');//anna
    const [password, setPassword] = useState('');//12345678
    // const [loggedinSuccessfully, setloggedinSuccessfully] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        userService.userChange.subscribe(async userData => {
            if (!userData) return;
            console.log('in subscr')
            setUserData(userData);
        });
    });

    const handleUsername = e => { setUsername(e.target.value) };
    const handlePassword = e => { setPassword(e.target.value) };
    useEffect(() => () => { clearTimeout(redirectTimeout) });

    const loginUser = async () => {
        if (!username || !password || !password) {
            console.log('email or password undefined');
            return;
        }

        const userData = {
            username: username,
            password: password,
        }

        const response = await userService.signin(userData);
        console.log(response);
        setUserData(userData);
        // redirectTimeout = setTimeout(() => setRedirect(true), 5000);
        // setloggedinSuccessfully(true);
    }

    // if (redirect) return <Redirect to="/" />;
    if (userData) return (
        <div className="signin-welcomeWrapper">
            <h1 className="signin-welcomeText">Welcome to banking ,{userData.username} &#128075;.</h1>
            <Button component={Link} to="/"
                variant="contained"
                color="primary"
                type="button" 
                style={{ backgroundColor: "#2d4954",margin:"5px",color:"#DCEEE9",borderRadius:"20px",minWidth:"165px", width:"200px", fontFamily: "'Quicksand', sans-serif"}}> 
                Home
        </Button> 
        </div>
    );
    return (
        <div className="signin-wrapper">
        <div className="signin-square">
            <h1 className="signin-headerText">Please, Sign In</h1>
            <form className="signin-form">
                <TextField id="outlined-basic" label="Name" variant="outlined" value={username} onChange={handleUsername} />
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" value={password} onChange={handlePassword} />
                <Button 
                variant="contained"
                color="primary"
                type="button" onClick={loginUser}
                style={{ backgroundColor: "#2d4954",margin:"5px",color:"#DCEEE9",borderRadius:"20px",minWidth:"165px",fontFamily: "'Quicksand', sans-serif"}}> 
                Sign In
        </Button> 
            </form>
        </div>
        </div>
    );
};

export default Signin;