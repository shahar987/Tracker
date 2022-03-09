import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeLg, faSignOut } from '@fortawesome/free-solid-svg-icons';
import "./Toolbar.scss";
import { Link, useNavigate } from 'react-router-dom';

const Toolbar = () => {
    
    const navigate = useNavigate();

    const signOut = () => {
        alert("Signed out!")
        navigate("/login");
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