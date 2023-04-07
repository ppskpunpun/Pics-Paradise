import { useState } from 'react'
import { createPortal } from 'react-dom'

import PicView from './PicView'
import { imageData } from './formatUnsplashResult'

import closeIcon from '../assets/close-icon.svg'


export default function Pic({ image }: { image: imageData }) {

    const [showDetail, setShowDetail] = useState(false)

    const [showPopUp, setShowPopUp] = useState(false)

    const onMouseEvents = {
        onMouseEnter: () => setShowDetail(true),
        onMouseLeave: () => setShowDetail(false)
    }

    return (
        <div className="picture-card">

            <img src={image.url} alt={image.title} {...onMouseEvents} style={showDetail ? {filter: 'brightness(.65)'} : {} }
                onClick={() => setShowPopUp(true)}
            />
            
            <div className="info" style={{ opacity: showDetail ? '1' : '0' }} {...onMouseEvents}>
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