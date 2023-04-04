import { useState, useEffect } from 'react'

export default function useFetch(url: string) {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setData(data)
        })
        .catch(err => {
            console.log(err)
            setError(err)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [url])  

    return (
        { isLoading, data, error }
    )
}