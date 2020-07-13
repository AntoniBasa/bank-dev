import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  }  from 'react-router-dom';
  import Button from '@material-ui/core/Button';
  import { makeStyles } from '@material-ui/core/styles';

  const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));


const WelcomePage = () => {

    const classes = useStyles();

    return (
        <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"}}>
            <h1 style={{color:"#1B2B39",fontWeight:"700",fontSize:"300%",textAlign:"center",margin:"0"}}>Welcome to banking!</h1>

            <div style={{width:"32%",display:"flex",justifyContent:"space-between",flexWrap:"wrap",justifyContent:"center"}}>
            
            <p style={{color:"#00886C",fontWeight:"700",fontSize:"200%",margin:"0"}}>CityBank</p>
           
            <p style={{color:"#2D4954",fontWeight:"500",fontSize:"200%",textAlign:"center",margin:"0",minWidth:"273px"}}>- more than bank.</p>
            </div>

            <div style={{width:"22%",display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
             <Button component={Link} to="/becomeclient"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    style={{ backgroundColor: "#00886C",margin:"5px",color:"#DCEEE9",borderRadius:"20px",minWidth:"165px",fontFamily: "'Quicksand', sans-serif"}}> 
                    Become a Client
            </Button> 
            <Button component={Link} to="/signin"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    style={{ backgroundColor: "#2D4954",margin:"5px",color:"#DCEEE9",borderRadius:"20px",minWidth:"87px",fontFamily: "'Quicksand', sans-serif"}}> 
                    Sign In
            </Button> 
            </div>

        </div>
    );
};

export default WelcomePage;
