import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component{
    getSearchTerm = (term)=>{
        console.log(term)
    }
    render(){
        return(
        <div className="ui container">
            <SearchBar getSearchTerm={this.getSearchTerm}/>

        </div>
        );
    }
}

export default App;