import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import PicsColumn from './PicsColumn'
import { imageData, formatUnsplashResult } from './formatUnsplashResult'

export default function Pictures({ search='' }) {

    const [page, setPage] = useState(1)

    // const url = search != '' ? 
    //     `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}&query=${search}&page=${page}&per_page=30` 
    //     : `https://api.unsplash.com/photos/random/?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}&count=30`

    // placeholder API
    const url = search != '' ?
        'https://worrisome-baseball-cap-hare.cyclic.app/api/unsplash/placeholder/tokyo'
        : 'https://worrisome-baseball-cap-hare.cyclic.app/api/unsplash/placeholder/random'

    const { isLoading, data, error } = useFetch(url)

    let imagesData: imageData[] = [{url: '', title: '', description: ''}] // define initial value to prevent error

    if (data) {
        imagesData = search != ''
        ? data.results.map((result: any): imageData => {
            return formatUnsplashResult(result)
        })
        : data.map((result: any): imageData => {
            return formatUnsplashResult(result)
        })
    }

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Opps! something went wrong.</div>

    return (
        <section className="pictures-section">
            {countingOffSepArray(imagesData, 3).map((images: imageData[], index) => {
                return <PicsColumn key={index + 'picscolumn'} images={images} />
            })}
        </section>
    )
}

function countingOffSepArray(arr: Array<any>, countTo: number) {

    let groupingArray: Array<any> = []
    for(let i=0; i<countTo; i++) {
        groupingArray.push([])
    }

    arr.forEach((item, index) => {
        groupingArray[index % countTo].push(item)
    })

    return groupingArray
}