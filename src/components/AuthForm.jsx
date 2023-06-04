function AuthForm({ onSubmit, formValue, onChange }) {

    return (
        <>
            <h2 className="login__title">Вход</h2>
            <form onSubmit={onSubmit} className="login__form">
                <div className="login__inputs">
                    <input
                        type="login"
                        name="login"
                        className="login__input"
                        placeholder="Введите логин"
                        value={formValue.login}
                        onChange={onChange}
                    />
                    <input
                        type="password"
                        name="password"
                        className="login__input"
                        minLength="4"
                        placeholder="Введите пароль"
                        value={formValue.password}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="login__button">Войти</button>
            </form>
        </>
    )
}

export default AuthForm;