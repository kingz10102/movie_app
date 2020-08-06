import React from 'react'
import './Nav.css'
function Nav() {
    return (
        <div className='nav'>
            <img 
                className='nav__logo'
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix logo"
            />
            <img
                className='nav__avatar'
                src="https://pbs.twimg.com/media/DN1OYIFX0AAbOMe?format=jpg&name=small"
                alt='User icon'/>
        </div>
    )
}

export default Nav;
