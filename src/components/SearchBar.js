import React, {useState} from "react";

function SearchBar({getSearchTerm}){
  const [term, setTerm] = useState("")
  const submitForm = (e)=>{
    e.preventDefault()
    getSearchTerm(term)
}
  return(
    <div className="search-bar ui segment">
    <form onSubmit={submitForm} className="ui form">
        <div className="field">
        <label>Video Search</label>
        <input type="text" value={term} onChange={(e)=> setTerm(e.target.value)}/ >
        </div>
    </form>
</div>
  )
}



export default SearchBar