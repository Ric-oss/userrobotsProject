

const SearchBox=({searchChange})=>{
    return(
        <div>
            <input type="search" placeholder="Serch Robot" onChange={searchChange} />
        </div>
    )
}
export default SearchBox;