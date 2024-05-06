import './Hero.css'

import { travels } from '/src/TravelData.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
    return(
        <div className="hero-container">
            <div className="hero-inner">
            {travels.map((travel) => (
                <div key={travel.id}>
                    <div className="hero-content">
                        <img src={travel.img} className="hero-img" alt={travel.title}/>
                        <div className="hero-content-inner">
                            <div className="location">
                                <FontAwesomeIcon icon={faLocationDot} style={{color: "#f55a5a",}} />
                                <p>{travel.location.toUpperCase()}</p>
                                <a href={travel.googleMapsUrl} target="_blank">View on Google Maps</a>
                            </div>
                            <h1>{travel.title}</h1>
                            <p className="dates">{travel.startDate} - {travel.endDate}</p>
                            <p>{travel.description}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}