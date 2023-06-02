import markerPath from '../images/marker.png';

function MapPoint({ coordinate }) {

    return (
        <div className="map-container__marker-container" style={{ top: coordinate.y, left: coordinate.x }}>
            <img className="map-container__marker" src={markerPath} alt="точка на карте" />
            <span className="map-container__marcer-span"></span>
        </div>
    )
}

export default MapPoint;