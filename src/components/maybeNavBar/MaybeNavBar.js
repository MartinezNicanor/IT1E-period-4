import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

const MaybeNavBar = ({children}) => {

    const location = useLocation();

    const [showNavBar , setShowNavBar] = useState(false);

    useEffect(() => {
        if(location.pathname === '/login' ||
            location.pathname === '/register') {
            setShowNavBar(false);
        } else {
            setShowNavBar(true);
        }
    }, [location])

    return (
        <div className="maybeNav">{showNavBar && children}</div>
    )
}

export default MaybeNavBar;