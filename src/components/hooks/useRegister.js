import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [errField, setErrField] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const navigate = useNavigate()

    const register = async (email, password, firstName, lastName ) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://projectinnovate-it1e-backend-production.up.railway.app/auth/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({ email, password, firstName, lastName })
        })
        
        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.errors)
            setErrField(json.field)
        }
        if(response.ok) {
            navigate("/login")
            alert(json.message)
        }
    }

    return { register, isLoading, error, errField }
}
