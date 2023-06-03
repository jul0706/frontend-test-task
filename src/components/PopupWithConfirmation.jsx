
function PopupWithConfirmation({ point, isOpen, onClose, onSubmit }) {

    return (
        <div className={`popup ${isOpen && 'popup_is-opened'}`}>
            <div className='popup-container'>
                <button className='close-icon' onClick={onClose}></button>
                <form name='edit-point' action="#" className='form-popup' onSubmit={onSubmit}>
                    <h2 className="form-popup__title">
                        Вы уверены?
                    </h2>
                    <button type="submit" className="form-popup__button">Да</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithConfirmation;