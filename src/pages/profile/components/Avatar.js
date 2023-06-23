import avatar from '../../../assets/images/avatar.png'

const Avatar = ({ src, alt }) => {
    const handleOnError = (e) => {
        e.target.src = avatar;
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
                src = { avatar }
                alt = {alt} />
            ) }
        </div>
    );
}

export default Avatar;