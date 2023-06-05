import { useNavigate } from 'react-router-dom';
import logoPath from '../images/header-logo.png';

function Header({ isLoggedIn, onLogout }) {

    const navigate = useNavigate();

    function logOut() {
        localStorage.removeItem('login');
        localStorage.removeItem('points');
        onLogout(false)
        navigate('/sign-in', { replace: true });
    }

    return (
        <header className="header">
            <div className='header__logo-container'>
                <img src={logoPath} alt="логотип сайта" className="header__logo" />
                <h1 className='header__title'>Твоя Карта</h1>
            </div>
            {isLoggedIn && <button type='button' className='header__button' onClick={logOut}>Выйти</button>}
        </header>
    )
}

export default Header;