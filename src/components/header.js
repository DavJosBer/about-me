import React from "react";
import {NavLink} from "react-router-dom";

export const Header = (props) =>{
        return(
            <>
                <header className="about-header">
                    <nav className="about-header-nav container">
                        <div className="about-header-title">
                            <NavLink to="/" className="button-light"><h2 className="about-header-title-text">David Bermúdez</h2></NavLink>
                        </div>
                        <div className="about-header-nav-options">
                            <NavLink className="button button-light" to="/home">{props.home}</NavLink>
                            <NavLink className="button button-light" to="/about-david">{props.about}</NavLink>
                        </div>
                    </nav>
                </header>
            </>
        )
}