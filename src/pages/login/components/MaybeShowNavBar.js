import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

const MaybeShowNavBar = ({children}) => {

    const location = useLocation();

    const [showNavBar , setShowNavBar] = useState(false);

    useEffect(() => {
        if(location.pathname === '/login' || location.pathname === '/register') {
            setShowNavBar(false);
        } else {
            setShowNavBar(true);
        }
    }, [location])

    return (
        <>
            {showNavBar && children}
        </>
    )
}

export default MaybeShowNavBar;