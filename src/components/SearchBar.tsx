import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import searchIcon from '../assets/search-icon.svg'

export default function SearchBar({styleFor}: {styleFor: string}) {

    const [search, setSearch] = useState('')
    const [isFocus, setIsFocus] = useState(false)
    const navigate = useNavigate()
    
    let searchBarClass
    if (styleFor == 'navbar') {
        searchBarClass = 'nav-search-bar'
    } else if (styleFor =='hero') {
        searchBarClass = 'hero-search-bar'
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        navigate(`search/${formatSearch(search)}`)
        e.preventDefault()
    }

    return (
        <div className={searchBarClass + '-wrapper'} >
            <form className={`${searchBarClass} ${isFocus ? 'box-shadow' : ''}`} onSubmit={e => handleSubmit(e)}>
                <input type="text" 
                    placeholder="Search to explore pictures" 
                    onChange={e => {setSearch(e.target.value)}}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                />
                <button type="submit">
                    <img src={searchIcon} alt="search-icon" width="30" />
                </button>
            </form>
        </div>
    )
}

function formatSearch(search: string) {
    return search
        .split(' ') // split to array
        .filter(word => word != '') // remove "" (empthy string) item(s)
        .join('-') // join array of word to string
}