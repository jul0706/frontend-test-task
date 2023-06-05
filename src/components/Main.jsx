import Map from "./Map";

function Main({ points, onAddPointClick, onEditPointClick, setPoints, initialPoints }) {

    function handleReset() {
        localStorage.setItem('points', JSON.stringify(initialPoints));
        setPoints(initialPoints);
    }

    return (
        <main className="main">
            <Map
                points={points}
                onEditPointClick={onEditPointClick}
            />
            <button className="main__button main__button_type_add" type="button" onClick={onAddPointClick}>Добавить точку</button>
            <button className="main__button main__button_type_reset" type="button" onClick={handleReset}>Сбросить изменения</button>
        </main>
    )
}

export default Main;