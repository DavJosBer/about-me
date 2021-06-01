import React from "react"
import {NavLink} from "react-router-dom"

export const Welcome = (props) => {
        return(
            <>
                <div className="welcome-background">
                    <div className="welcome-container">
                        <header className="welcome-header py">
                            <h1 className="welcome-header-text">Bienvenido</h1>
                            <div className="welcome-header-p py">
                                <p className="welcome-header-p-text lead">Yo soy David Bermúdez progrmador web.</p>
                            </div>
                        </header>
                        <nav className="welcome-nav">
                            <div className="welcome-nav-container">
                                <NavLink to="/home" className="button button-light" tabIndex="0">{props.home}</NavLink>
                                <NavLink to="/about-david" className="button button-light" tabIndex="0">{props.about}</NavLink>
                            </div>
                        </nav>
                    </div>
                </div>
            </>
        )
}