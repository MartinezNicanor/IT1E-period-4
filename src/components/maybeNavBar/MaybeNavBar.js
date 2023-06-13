import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const MaybeNavBar = ({children}) => {
    const location = useLocation();

    useEffect(() => {
        console.log("This is location:", location)
    },[location])
    
}

export default MaybeNavBar;