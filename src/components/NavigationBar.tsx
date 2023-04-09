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
            <SearchBar styleFor="navbar" />
            <a className="view-source-link" href="https://github.com/PPSK2550/Pics-Paradise" target="_blank">View Source</a>
        </nav>
    )
}