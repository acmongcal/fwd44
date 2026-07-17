import InputText from './InputText';
import Button from './Button';
import '../styles/SignUp.css';

function SignUp() {
    return (
        <form action="#0" onSubmit={(e) => { e.preventDefault() }}>
            <InputText label="Name" id="username" className="input-username" />
            <InputText label="Email" id="email" className="input-email" type="email" />
            <div className="submit-group">
                <Button className="submit" text="Sign Up" type="submit" color="#05b305" />
            </div>
        </form>
    );
}

export default SignUp;
