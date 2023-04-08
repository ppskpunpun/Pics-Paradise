import { useState, useRef, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

import PicView from './PicView'
import { imageData } from './formatUnsplashResult'

import closeIcon from '../assets/close-icon.svg'


export default function Pic({ image }: { image: imageData }) {

    const ref = useRef<any>(null) // image element
    const [width, setWidth] = useState(0) // width of image use to set info width
    const [showDetail, setShowDetail] = useState(false)
    const [showPopUp, setShowPopUp] = useState(false)

    const onMouseEvents = {
        onMouseEnter: () => setShowDetail(true),
        onMouseLeave: () => setShowDetail(false)
    }

    useLayoutEffect(() => {
        setWidth(ref.current?.offsetWidth)
    }, [])

    window.addEventListener('resize', () => {
        setWidth(ref.current?.offsetWidth)
    })

    return (
        <div className="picture-card">

            <img ref={ref} src={image.url} alt={image.title} {...onMouseEvents} style={showDetail ? {filter: 'brightness(.65)'} : {} }
                onClick={() => setShowPopUp(true)}
            />
            
            <div className="info" style={{ opacity: showDetail ? '1' : '0', width: `${width}px` }} {...onMouseEvents}>
                <a href={image.user.link} target='_blank'>
                    <img src={image.user.profile_image} alt={`profile picture of ${image.user.name}`} />
                </a> 
                <span>
                    Photo by 
                    <a href={image.user.link} target='_blank'>{image.user.name}</a> 
                </span>
            </div>

            {showPopUp ? 
                createPortal(
                    <div className="pop-up">
                        <PicView image={image} />
                        <button className="close-btn" onClick={() => {setShowPopUp(false)}}>
                            <img src={closeIcon} alt="close icon" width="16" />
                        </button>
                    </div>,
                    document.body
                )
                : <></>
            }
        </div>
    )
}