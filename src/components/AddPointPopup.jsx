
function AddPointPopup({ isOpen, onClose, onSubmit }) {

    return (
        <div className={`popup ${isOpen && 'popup_is-opened'}`}> {/*Попап на всю страницу*/}
            <div className='popup-container'> {/*Окно формы*/}
                <button className='close-icon' onClick={onClose}></button> {/*Кнопка закрытия*/}
                <form name='add-point' action="#" className='form-popup' onSubmit={onSubmit}> {/*Форма*/}
                    <h2 className="form-popup__title">
                        Добавить точку на карту
                    </h2>
                    <fieldset className="form-popup__inputs">
                        <input
                            type="text"
                            name="name"
                            className="form-popup__input"
                            minLength="2"
                            maxLength="30"
                            placeholder="Название"
                            required
                        />
                        <input
                            type="number"
                            min={1}
                            step={5}
                            name="amount"
                            className="form-popup__input"
                            placeholder="Количество товара"
                            required
                        />
                        <input
                            type="number"
                            name="coordinateX"
                            className="form-popup__input"
                            min={0}
                            step={0.1}
                            placeholder="Координата X, %"
                            required
                        />
                        <input
                            type="number"
                            name="coordinateY"
                            className="form-popup__input"
                            min={0}
                            step={0.1}
                            placeholder="Координата Y, %"
                            required
                        />
                    </fieldset>
                    <button type="submit" className="form-popup__button-save">Создать</button>
                </form>
            </div>
        </div>
    )
}

export default AddPointPopup;