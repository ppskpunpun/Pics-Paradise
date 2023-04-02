import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import logo from '../assets/logo.png'

export default function NavigationBar() {
    return (
        <nav>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Pics Paradise Logo" width="60" />
                    <span>Pics Paradise</span>
                </Link>
            </div>
            <SearchBar />
            <a className="view-source-link" href="#will-replace-with-github-repository-link">View Source</a>
        </nav>
    )
}