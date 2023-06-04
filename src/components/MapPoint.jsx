import markerPath from '../images/marker.png';

function MapPoint({ point, onEditPoint }) {

    return (
        <div className="map-container__marker-container" style={{ top: `${point.y.toFixed(2)}%`, left: `${point.x.toFixed(2)}%` }}>
            <img
                className="map-container__marker"
                src={markerPath}
                alt="точка на карте"
                title={`${point.name}, количество товара: ${point.amount}`}
                onClick={onEditPoint}
            />
        </div>
    )
}

export default MapPoint;