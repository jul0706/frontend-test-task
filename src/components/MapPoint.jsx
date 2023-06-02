import markerPath from '../images/marker.png';

function MapPoint({ coordinate, name, amount }) {

    return (
        <div className="map-container__marker-container" style={{ top: coordinate.y, left: coordinate.x }}>
            <img className="map-container__marker" src={markerPath} alt="точка на карте" title={`${name}, количество товара: ${amount}`} />
        </div>
    )
}

export default MapPoint;