import searchIcon from '../assets/search-icon.svg'

export default function SearchBar({styleFor}: {styleFor: string}) {
    
    let searchBarClass
    if (styleFor == 'navbar') {
        searchBarClass = 'nav-search-bar'
    } else if (styleFor =='hero') {
        searchBarClass = 'hero-search-bar'
    }
    
    return (
        <div className={searchBarClass + '-wrapper'}>
            <form className={searchBarClass}>
                <input type="text" placeholder="Search to explore pictures" />
                <button type="submit">
                    <img src={searchIcon} alt="search-icon" width="30" />
                </button>
            </form>
        </div>
    )
}