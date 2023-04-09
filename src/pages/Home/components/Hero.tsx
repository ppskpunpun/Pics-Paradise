import SearchBar from '../../../components/SearchBar'
import SuggestSearch from './SuggestSearch'

export default function Hero() {
    return (
        <header className="hero-section">
            <div className="hero-section-inner">
                <h1>Discover the power of visual storytelling with our image gallery</h1>
                <SearchBar styleFor="hero" />
                <div className="suggest-search-wrapper">
                    {['space', 'nature', 'paradise', 'anime', 'dog'].map((search, index) => {
                        return <SuggestSearch key={index + search} keyword={search} />
                    })}
                </div>
            </div>
        </header>
    )
}