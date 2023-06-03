import Map from "./Map";

function Main({ points }) {

    return (
        <main className="main">
            <Map
                points={points}
            />
            <button className="main__button main__button_type_add" type="button">Добавить точку на карте</button>
            <button className="main__button main__button_type_reset" type="button">Сбросить изменения</button>
        </main>
    )
}

export default Main;