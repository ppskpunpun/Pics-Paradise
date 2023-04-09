import { useNavigate } from 'react-router-dom'
import poopIcon from '../assets/poop-icon.svg'

export default function NotFound() {

    const navigate = useNavigate()

    return (
        <div className="not-found">
            <img src={poopIcon} alt="Shit!" width="256" />
            <h1>404</h1>
            <p>What are you looking for? Page not found.</p>
            <button onClick={() => navigate('/')}>Back To Home</button>
        </div>
    )
}