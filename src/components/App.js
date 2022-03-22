import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube'
import VideoList from "./VideoList";

class App extends React.Component{
    state = {videos: []}
    getSearchTerm = async (term)=>{
       const response = await youtube.get('/search',{
           params:{
               q: term
           }
       })
       this.setState({videos: response.data.items})
    }


    render(){
        return(
        <div className="ui container">
            <SearchBar getSearchTerm={this.getSearchTerm}/>
            <VideoList videos={this.state.videos}/>
        </div>
        );
    }
}

export default App;