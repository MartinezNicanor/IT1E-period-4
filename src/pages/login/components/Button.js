import './../css/components.css';

const Button = ({label}) => {
        return(
            <>
                <input type={"submit"} className={"button"} value={label} />
            </>
        );
}

export default Button;