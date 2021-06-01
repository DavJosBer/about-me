import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Welcome} from "./Welcome";
import {About} from "./About";
import {Contact} from "./Contact"
export class App extends React.Component{
    navOptions = {
        home: "Inicio",
        about: "Acerca de mi",
        contact: "Contacto"
    }
    render(){
        return(
            <>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/home">
                            <Welcome
                            home={this.navOptions.home}
                            about={this.navOptions.about}
                            />
                        </Route>
                        <Route exact path="/about-david">
                            <About
                            home={this.navOptions.home}
                            about={this.navOptions.about}
                            />
                        </Route>
                        <Route exact path="/contact-david">
                            <Contact
                                home={this.navOptions.home}
                                about={this.navOptions.about}
                            />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}