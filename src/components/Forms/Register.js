import './Login.css';

const Register = () => {
    return (
        <>
            <form>
                <input type="text" className="regField" placeholder="username" />
                <input type="text" className="regField" placeholder="pasword" />
                <input type="submit" className="submitBtn" value="REGISTER" />
            </form>
        </>
    );
}

export default Register;