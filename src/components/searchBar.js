import React from "react";

export class SearchBar extends React.Component{
    state = {term: ''};
    render(){
        return(
            <>
                <div className="search-container">
                    <form className="search-form" onSubmit={e => {
                        e.preventDefault();
                        this.props.onSubmit(this.state.term)
                    }}>
                        <label className="search-form-label" htmlFor="search">Unsplash Search</label>
                        <p>Busca imagenes por título</p>
                        <input type="text" className="search-form-input" id="search" value={this.state.term} onChange={e => 
                        this.setState(
                            {term: e.target.value}
                        )}/>
                    </form>
                </div>
            </>
        )
    }
}