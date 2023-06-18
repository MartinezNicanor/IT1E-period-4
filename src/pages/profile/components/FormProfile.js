const FormProfile = ({ info }) => {
    return (
        <form>
            <p className="inputTitle">{ info.title }</p>
            <div className="inputContainer">
                <div className="inputs">
                    <label htmlFor={ info.inputs[0] }>{ info.inputs[0] }:</label>
                    <input type="text" name= { info.className[0] } placeholder={ info.inputs[0] } />
                </div>
            </div>

            <div className="inputContainer">
                <div className="inputs">
                    <label htmlFor={ info.inputs[1] }>{ info.inputs[1] }:</label>
                    <input type="text" name= { info.className[1] } placeholder={ info.inputs[1] } />
                </div>
            </div>
            <button className="profileButton">Save</button>
        </form>
    );
}

export default FormProfile;