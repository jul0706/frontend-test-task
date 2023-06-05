import { useEffect, useState } from "react";

function EditPointPopup({ point, isOpen, onClose, onSubmit, onConfirmPopupOpen }) {

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(point, formValue);
    }

    function handleDeleteClick() {
        onConfirmPopupOpen(true)
    }

    const [formValue, setFormValue] = useState({
        name: '',
        amount: 0,
        x: 0,
        y: 0,
    })

    useEffect(() => {
        if (point) {
            setFormValue({
                name: point.name,
                amount: point.amount,
                x: point.x.toFixed(2),
                y: point.y.toFixed(2),
            })
        }
    }, [point])


    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    return (
        <div className={`popup ${isOpen && 'popup_is-opened'}`}> {/*Попап на всю страницу*/}
            <div className='popup-container'> {/*Окно формы*/}
                <button className='close-icon' onClick={onClose}></button> {/*Кнопка закрытия*/}
                <form name='edit-point' action="#" className='form-popup' onSubmit={handleSubmit}> {/*Форма*/}
                    <h2 className="form-popup__title">
                        Редактировать точку
                    </h2>
                    <fieldset className="form-popup__inputs">
                        <input
                            type="text"
                            name="name"
                            className="form-popup__input"
                            minLength="2"
                            maxLength="30"
                            placeholder="Название"
                            value={formValue.name/*`${formValue.name ? formValue.name : ''}`*/}
                            required
                            onChange={handleChangeInput}
                        />
                        <input
                            type="number"
                            min={0}
                            name="amount"
                            className="form-popup__input"
                            placeholder="Количество товара"
                            value={formValue.amount/*`${formValue.amount ? formValue.amount : 0}`*/}
                            required
                            onChange={handleChangeInput}
                        />
                        <input
                            type="number"
                            name="x"
                            className="form-popup__input"
                            min={0}
                            placeholder="Координата X, %"
                            value={formValue.x/*`${formValue.x ? formValue.x : 0}`*/}
                            required
                            onChange={handleChangeInput}
                        />
                        <input
                            type="number"
                            name="y"
                            className="form-popup__input"
                            min={0}
                            placeholder="Координата Y, %"
                            value={formValue.y/*`${formValue.y ? formValue.y : 0}`*/}
                            required
                            onChange={handleChangeInput}
                        />
                    </fieldset>
                    <div className="form-popup__buttons-container">
                        <button type="submit" className="form-popup__button">Сохранить</button>
                        <button type="button" className="form-popup__button" onClick={handleDeleteClick}>Удалить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditPointPopup;