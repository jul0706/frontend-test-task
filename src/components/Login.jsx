import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthForm from "./AuthForm";


function Login({ onLogin, onChange, formValue, setFormValue }) {

    const [login, setLogin] = useState('');

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        if (formValue.login === 'test' && formValue.password === 'test') {
            localStorage.setItem('login', formValue.login);
            onLogin(true);
            setLogin(formValue.login)
            setFormValue({ login: '', password: '' });
            navigate('/frontend-test-task', { replace: true });
        } else {
            alert('Неверный логин или пароль');
            setFormValue({ login: '', password: '' });
        }
    }

    return (
        <div className="login">
            <AuthForm type={'Вход'} onSubmit={handleLogin} onChange={onChange} formValue={formValue} />
        </div>
    )
}

export default Login;