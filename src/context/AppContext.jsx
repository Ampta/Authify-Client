import { createContext, use, useState } from "react";
import {AppContants} from '../util/constants.js';

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const backendUrl = AppContants.BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(false);
    
    
    const contextValue = {
        backendUrl,
        isLoggedIn, setIsLoggedIn,
        userData, setUserData
    }
    
    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
};