import './../css/components.css';

const Button = ({type}) => {
    if(type === "signUp") {
        return(
            <>
                <input type={"submit"} className={"registerButton"} value={"Sign Up"} />
            </>
        );
    }
}

export default Button;