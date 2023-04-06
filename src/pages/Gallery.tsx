import { useParams } from 'react-router-dom'
import Pictures from '../components/Pictures'

export default function Gallery() {

    const { query } = useParams()

    return (
        <main>
            <h1 className="search-title">{query}</h1>
            <Pictures search={query} />
        </main>
    )
}