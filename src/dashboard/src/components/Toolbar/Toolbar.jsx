import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeLg, faSignOut } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import "./Toolbar.scss";
import { Link } from 'react-router-dom';
const Toolbar = () => {
    
    const signOut = () => {
        alert("Signed out!")
    }

    return (
        <nav className='toolbar'>
            
            {/* Home button */}
            <Link className='nav-home' to={"/"}>
                <FontAwesomeIcon icon={faHomeLg} className="icon" size='2x' />
                <text>Trackr</text>
            </Link>

            { /* Sign out button*/}
            <span className='nav-sign-out' onClick={signOut}>
                <text>Sign out</text>
                <FontAwesomeIcon icon={faSignOut} className="icon" size='lg' />
            </span>

        </nav>
    )
}

export default Toolbar