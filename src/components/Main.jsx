import Map from "./Map";

function Main({ points, onAddPoint, onEditPointClick, onConfirm, loggedIn }) {

    return (
        <main className="main">
            <Map
                points={points}
                onEditPointClick={onEditPointClick}
            />
            <button className="main__button main__button_type_add" type="button" onClick={onAddPoint}>Добавить точку на карте</button>
            <button className="main__button main__button_type_reset" type="button">Сбросить изменения</button>
        </main>
    )
}

export default Main;