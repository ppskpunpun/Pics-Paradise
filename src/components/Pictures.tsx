import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import Loader from './Loader'
import PicsColumn from './PicsColumn'
import { imageData, formatUnsplashResult } from './formatUnsplashResult'

export default function Pictures({ search='' }) {

    const firstSearch = useRef(search)

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

    // empthy search consider as random pictures
    const url = search != '' ? 
        `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}&query=${search}&page=${page}&per_page=30` 
        : `https://api.unsplash.com/photos/random/?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}&count=30`

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
                if (search != firstSearch.current) {
                    console.log('claer data')
                    setData(newData)
                } else {
                    setData(data ? [...data, ...newData] : newData) 
                }
            })
            .catch(err => {
                console.log(data)
                console.log(err)
                setError(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
        }, 1000)
    }, [page, url])

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
                    sortImagesIntoColumns(data, columns)
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

function sortImagesIntoColumns(images: Array<imageData>, resultColumns: number) {

    // Sort images to columns that have roughy same height

    let columns: Array<imageData[]> = [] // result
    for (let i=0; i<resultColumns; i++) { columns.push([]) }

    for (const image of images) {

        // Get the height of each column
        let columnsHeightSum: number[] = []
        columns.forEach(col => {
            let colHeightSum = 0
            col.forEach(image => {
                colHeightSum += (image.height / image.width) // ratio height to width of image
            })
            columnsHeightSum.push(colHeightSum)
            colHeightSum = 0
        })

        // The index of shortest column
        const minSumHeightIndex = columnsHeightSum.indexOf(Math.min(...columnsHeightSum))
        columns[minSumHeightIndex].push(image)
    }

    return columns
}