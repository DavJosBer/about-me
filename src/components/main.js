import React from "react";
import unsplash from "../api/unsplash"
import {Chart} from "./chart";
import {ProgressBar} from "./progressBar";
import {SearchBar} from "./searchBar";
import {ImageList} from "./imageList";
import {Footer} from "./footer"

export class Main extends React.Component{
    state = {images: []};
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term}
        })
        this.setState({images: response.data.results})
    }
    render(){
        return(
        <>
            <header className="main-header">
                <h2 className="main-header-title">Yo soy David Bermúdez</h2>
                <h3 className="main-header-sub lead">Desarrollador Web</h3>
            </header>
            <main className="main-container container">
                <div className="main-container-grid" id="grid">
                    <div className="main-container-progress">
                        <div>
                            <h3 className="main-container-progress-title">Mis Conocimientos:</h3>
                        <div className="main-container-progress-bar pt">
                            {this.props.keys.map((item, i)=>(
                                <ProgressBar key={i} name={this.props.propers[i]} value={item}/>
                            ))}
                        </div>
                        </div>
                    </div>
                    <div className="main-container-graph">
                        <h3>Aplicados en este sitio:</h3>
                        <Chart keys={this.props.keys} properties={this.props.propers}/>
                    </div>
                </div>
                <div className="main-container-search container">
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    <ImageList item={this.state.images}/>
                </div>
            </main>
            <Footer/>
        </>
    )
    }
}