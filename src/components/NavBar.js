import React from 'react'

export default function NavBar() {
    return (
        <div className="nav-bar-wrapper">
            <div className="left-logo">
                logo
            </div>

            <div className="nav-bar-options">
                <div className="nav-bar-item">
                    <a href="/events" className="nav-bar-item-link">Events</a>
                </div>

                <div className="nav-bar-item">
                    <a href="/requests" className="nav-bar-item-link" >Requests</a>
                </div>

                <div className="nav-bar-item">
                    <a href="/connect" className="nav-bar-item-link" >Connect</a>
                </div>
            </div>
            
        </div>
    )
}
