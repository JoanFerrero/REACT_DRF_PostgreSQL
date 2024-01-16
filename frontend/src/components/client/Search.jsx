const Search = () => {
  return (
    <div className="col-md-6 mt-3 mb-3 mr-3 ml-3 pr-3 mx-2">
      <div className="form">
        <i className="fa fa-search"></i>
        <input type="text" className="form-control form-input" placeholder="Search anything..." />
        <span className="left-pan"><i className="fa fa-microphone"></i></span>
      </div> 
    </div>
  )
}

export default Search