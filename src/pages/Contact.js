import React from "react";
import {Header} from "../components/header";
import {Footer} from "../components/footer"

export const Contact = (props) => {
    return(
        <>
            <Header
                home={props.home}
                about={props.about}
            />
            <div>
                
            </div>
            <Footer/>
        </>
    )
}