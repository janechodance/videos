import React from "react";

class SearchBar extends React.Component{
    state= {term: ""}
    submitForm = (e)=>{
        e.preventDefault()
        this.props.getSearchTerm(this.state.term)
    }
    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.submitForm} className="ui form">
                    <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={this.state.term} onChange={(e)=> this.setState({term: e.target.value})} ></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar