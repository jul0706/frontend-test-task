import logoPath from '../images/header-logo.png';

function Header({ isLoggedIn }) {

    return (
        <header className="header">
            <div className='header__logo-container'>
                <img src={logoPath} alt="логотип сайта" className="header__logo" />
                <h1 className='header__title'>Твоя Карта</h1>
            </div>
            <button
                type='button'
                className='header__button'
            >
                {isLoggedIn ? 'Выйти' : 'Войти'}
            </button>
        </header>
    )
}

export default Header;