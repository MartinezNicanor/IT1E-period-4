const Avatar = ({ src, alt }) => {
    const handleOnError = (e) => {
        e.target.src = "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
    }

    return (
        <div>
            {src ? (
                <img className= "defaultClass"
                src = {src}
                alt = {alt} 
                onError={handleOnError} />
            ) : (
                <img className= "defaultClass"
                src = {"https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"}
                alt = {alt} />
            ) }
        </div>
    );
}

export default Avatar;