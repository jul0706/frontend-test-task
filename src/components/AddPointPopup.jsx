import { useState } from "react";

function AddPointPopup({ isOpen, onClose, onAddPoint, points }) {

    let [formValue, setFormValue] = useState({
        name: "",
        amount: 0,
        x: 0,
        y: 0,
    })

    const handleChange = (e) => {
        let { name, value } = e.target;

        if (name === 'x' || name === 'y') {
            value = +value;
        }

        setFormValue({
            ...formValue,
            [name]: value
        });
    }


    function handleSubmit(e) {
        e.preventDefault();
        let arrayForLocalStorage = onAddPoint(formValue);
        localStorage.setItem('points', JSON.stringify(arrayForLocalStorage));
        setFormValue({
            name: "",
            amount: 0,
            x: 0,
            y: 0,
        })
    }

    return (
        <div className={`popup ${isOpen && 'popup_is-opened'}`}> {/*Попап на всю страницу*/}
            <div className='popup-container'> {/*Окно формы*/}
                <button className='close-icon' onClick={onClose}></button> {/*Кнопка закрытия*/}
                <form name='add-point' action="#" className='form-popup' onSubmit={handleSubmit}> {/*Форма*/}
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
                            value={formValue.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="number"
                            min={1}
                            name="amount"
                            className="form-popup__input"
                            placeholder="Количество товара"
                            required
                            value={formValue.amount}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="x"
                            className="form-popup__input"
                            min={0}
                            max={100}
                            step={0.1}
                            placeholder="Координата X, %"
                            required
                            value={+formValue.x}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="y"
                            className="form-popup__input"
                            min={0}
                            max={100}
                            step={0.1}
                            placeholder="Координата Y, %"
                            required
                            value={+formValue.y}
                            onChange={handleChange}
                        />
                    </fieldset>
                    <button type="submit" className="form-popup__button">Создать</button>
                </form>
            </div>
        </div>
    )
}

export default AddPointPopup;