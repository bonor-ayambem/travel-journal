import pin from "./images/location-pin.png"

export default function Location(props) {
    const title = props.details.title
    const location = props.details.location
    const url = props.details.googleMapsUrl
    const start = props.details.startDate
    const end = props.details.endDate
    const description = props.details.description
    const image = props.details.imageUrl

    return (
        <div className="location-container">
            <div className="main">
                <img src={image} alt="location" className="location-image"/>
                <section className="location-details">
                    <div className="url-details">
                        <img src={pin} alt="pin" className="location-pin"/>
                        <h6 className="country">{location.toUpperCase()}</h6>
                        <a href={url}>View on Google Maps</a>
                    </div>
                    <h1 className="place">{title}</h1>
                    {start && end && <h3 className="dates">{start} - {end}</h3>}
                    <p className="descr">{description}</p>
                </section>
            </div>
            <hr></hr>
        </div>
    )
}