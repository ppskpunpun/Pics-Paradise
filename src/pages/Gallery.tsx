import { useParams } from 'react-router-dom'
import Pictures from '../components/Pictures'

export default function Gallery() {

    const { query } = useParams()

    return (
        <main>
            <Pictures search={query} />
        </main>
    )
}