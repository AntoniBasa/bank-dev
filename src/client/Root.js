import React, {useContext, useEffect, useState} from 'react';
import {Switch, Route, Link, useLocation} from 'react-router-dom';
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import {CreditCard, Home, EuroSymbol, EmojiPeople} from '@material-ui/icons';

import clientPrivate from './hoc/client-private';
import UserContext from './context';



import WelcomePage from './pages/welcome';
import HomePage from './pages/home';
import TransfersPage from './pages/transfers';
import CurrencyExchangePage from './pages/currency-exchange';
import AccountPage from './pages/account';
import NotFoundPage from './pages/404';


import Signin from './components/signin';
import BecomeClient from './components/become-client';


const Root = () => {



    const userService = useContext(UserContext);

    const {pathname} = useLocation();
    const currentValueFromPath = pathname.split('/')[1];

    const [value, setValue] = useState(currentValueFromPath);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    // const [userData, setUserData] = useState(null);

    useEffect(() => {
        userService.load();

        // userService.userChange.subscribe(async userData => {
        //     if (!userData) return;
        //     // setUserData(userData);
        // });
    }, []);

    return (
        <div style={{ margin: "0", height: "100%" }}>

            <main style={{ width: "100%", height: "80%" }}>
                <Switch>
                    <Route path="/welcome" exact component={WelcomePage} />
                    <Route path="/transfers" exact component={clientPrivate(TransfersPage)}/>
                    <Route path="/currency-exchange" exact component={clientPrivate(CurrencyExchangePage)}/>
                    <Route path="/account" exact component={clientPrivate(AccountPage)}/>
                    <Route path="/" exact component={clientPrivate(HomePage)}/>
                    <Route path="/signin" exact component={Signin} />
                    <Route path="/becomeclient" exact component={BecomeClient} />
                    <Route path="*" exact component={NotFoundPage} />

                </Switch>
            </main>
            {userService.user &&
                <footer style={{ width: "100%", height: "20%", position: "fixed", bottom: "0" }}>
                    <BottomNavigation value={value} onChange={handleChange} style={{ backgroundColor: "#1B2B39", width: "100%", borderTopRightRadius: "15px", borderTopLeftRadius: "15px", position: "fixed", bottom: "0" }}>
                        <BottomNavigationAction component={Link} to="/" showLabel={false} label="Home" value="home" icon={<Home />} />
                        <BottomNavigationAction component={Link} to="/transfers" showLabel={false} label="Transfers" value="transfers" icon={<CreditCard />} />
                        <BottomNavigationAction component={Link} to="/currency-exchange" showLabel={false} label="Currency Exchange" value="currency" icon={<EuroSymbol />} />
                        <BottomNavigationAction component={Link} to="/account" showLabel={false} label="Account" value="nearby" icon={<EmojiPeople />} />
                    </BottomNavigation>
                </footer>
            }
        </div>
    );
};

export default Root;
