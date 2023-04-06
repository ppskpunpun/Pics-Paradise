import { Link } from 'react-router-dom'

export default function SuggestSearch({ keyword }: { keyword: string}) {
    return (
        <div className="suggest-search">
            <Link to={'/search/' + keyword}>{keyword}</Link>
        </div>
    )
}