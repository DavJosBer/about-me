import React from "react";
import {Header} from "../components/header"
import {Main} from "../components/main"

export const About = (props) =>{
    const keys = [
        {"HTML": 99},
        {"CSS": 99},
        {"SCSS": 80},
        {"JS": 80},
        {"React": 60},
        {"Python": 40},
        {"MySQL": 40}
    ];
    let propers = [];
    for (let i = 0; i < keys.length; i++){
        const str = Object.keys(keys[i])
        propers.push(str[0])
    }
        return(
            <>
                <Header
                home={props.home}
                about={props.about}
                />
                <Main keys={keys} propers={propers}/>
            </>
        )
}