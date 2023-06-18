import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import './Footer.css'

const MaybeFooter = ({ children }) => {
    const location = useLocation();
    const [showFooter , setShowFooter] = useState(false);

    useEffect(() => {
        if(location.pathname === '/login' || location.pathname === '/register') {
            setShowFooter(false);
        } else {
            setShowFooter(true);
        }
    }, [location])

    return (
        <div className="maybeFooter">{showFooter && children}</div>
    )
}

export default MaybeFooter;