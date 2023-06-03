import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthForm from "./AuthForm";


function Login({ onLogin, setisAuthComplete, onChange, formValue, setFormValue }) {

    const [password, setPassword] = useState('') //стэйт пароля

    /* navigate = useNavigate();*/



    return (
        <div className="login">
            <AuthForm type={'Вход'} onSubmit={''} onChange={onChange} formValue={formValue} />
        </div>
    )
}

export default Login;