import './Nav.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';


export const Nav = () => {
    return(
        <div className="nav">
            <FontAwesomeIcon className="nav-logo" icon={faEarthAmericas} style={{color: "#ffffff",}} />
            <p>my travel journal.</p>
        </div>
    );
}

