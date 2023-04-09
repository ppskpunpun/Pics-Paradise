import { useState, useEffect, useLayoutEffect } from 'react'
import Loader from './Loader'
import PicsColumn from './PicsColumn'
import { imageData, formatUnsplashResult } from './formatUnsplashResult'

export default function Pictures({ search='' }) {

    const [page, setPage] = useState(1)
    const [columns, setColumns] = useState(3)
    const columnsBreakpoint = 845

    function reColumnsCheck() {
        setColumns(window.innerWidth <= columnsBreakpoint ? 2 : 3)
    }

    useLayoutEffect(() => {
        reColumnsCheck()
    }, [])

    useEffect(() => {
        window.addEventListener('resize', reColumnsCheck)
    }, [])


    function api(isAPI=true) {
        let url
        if (isAPI) {
            url = search != '' ? 
                `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}&query=${search}&page=${page}&per_page=30` 
                : `https://api.unsplash.com/photos/random/?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}&count=30`
        } else {
            // placeholder API
            url = search != '' ?
                'https://worrisome-baseball-cap-hare.cyclic.app/api/unsplash/placeholder/tokyo'
                : 'https://worrisome-baseball-cap-hare.cyclic.app/api/unsplash/placeholder/random'
        }
        return url
    }

    const url = api(true)

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<any>()
    const [error, setError] = useState<any>()

    function formatData(data: any) {
        let imagesData: imageData[] = []
    
        imagesData = search != ''
        ? data.results.map((result: any): imageData => {
            return formatUnsplashResult(result)
        })
        : data.map((result: any): imageData => {
            return formatUnsplashResult(result)
        })
    
        return imagesData
    }

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            fetch(url)
            .then(res => {
                return res.json()
            })
            .then(jsonData => {
                let newData = formatData(jsonData)
                setData(data ? [...data, ...newData] : newData) 
            })
            .catch(err => {
                console.log(err)
                setError(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
        }, 1000)
    }, [page])

    if (error) {
        return (
        <div style={{fontSize: '1.1rem', color: '#fff', textAlign: 'center', padding: '1rem'}}>
            Opps! something went wrong.
            <div style={{fontSize: '1rem', marginTop: '2rem'}}>
                {`${error}`}
            </div>
        </div>
        )
    }

    return (
        <>
            {
                data && 
                <section className="pictures-section">
                {
                    countingOffSepArray(data, columns)
                    .map((images: imageData[], index) => {
                        return <PicsColumn key={index + 'picscolumn'} images={images} />
                    })
                }
                </section>
            }
            {(data && !isLoading) && 
                <div className='load-more-wrapper'>
                    <button className="load-more" onClick={() => {
                        setPage(page + 1)
                        setTimeout(() => {
                            window.scrollTo({
                                top: document.documentElement.scrollHeight,
                                behavior: 'smooth'
                            })
                        }, 150)
                    }}>Load more</button>
                </div>
            }
            {isLoading && <Loader />}
        </>
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