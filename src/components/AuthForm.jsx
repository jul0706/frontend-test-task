function AuthForm({ onSubmit, formValue, onChange }) {

    return (
        <>
            <h2 className="login__title">Вход</h2>
            <form onSubmit={onSubmit} className="login__form">
                <div className="login__inputs">
                    <input
                        type="email"
                        name="email"
                        className="login__input"
                        placeholder="Логин"
                        value={formValue.email}
                        onChange={onChange}
                    />
                    <input
                        type="password"
                        name="password"
                        className="login__input"
                        minLength="4"
                        placeholder="Пароль"
                        value={formValue.password}
                        onChange={onChange}
                    />
                </div>
                <button className="login__button">Войти</button>
            </form>
        </>
    )
}

export default AuthForm;