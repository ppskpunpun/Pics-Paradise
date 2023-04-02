import searchIcon from '../assets/search-icon.svg'

export default function SearchBar() {
    return (
        <div className="search-bar-wrapper">
            <form className="nav-search-bar">
                <input type="text" placeholder="Search to explore pictures" />
                <button type="submit">
                    <img src={searchIcon} alt="search-icon" width="30" />
                </button>
            </form>
        </div>
    )
}