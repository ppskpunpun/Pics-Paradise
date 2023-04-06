import { useState } from 'react'
import { imageData } from './formatUnsplashResult'
import downloadIcon from '../assets/download-icon.svg'

export default function Pic({ image }: { image: imageData }) {

    const [showDetail, setShowDetail] = useState(false)

    const onMouseEvents = {
        onMouseEnter: () => setShowDetail(true),
        onMouseLeave: () => setShowDetail(false)
    }

    return (
        <div className="picture-card">

            <img src={image.url} alt={image.title} {...onMouseEvents} style={showDetail ? {filter: 'brightness(.65)'} : {} }/>
            
            <div className="info" style={{ opacity: showDetail ? '1' : '0' }} {...onMouseEvents}>
                <a href={image.user.link} target='_blank'>
                    <img src={image.user.profile_image} alt={`profile picture of ${image.user.name}`} />
                </a> 
                <span>
                    Photo by 
                    <a href={image.user.link} target='_blank'>{image.user.name}</a> 
                    on <a href="https://unsplash.com" target="_blank" title="https://unsplash.com">Unsplash</a>
                </span>
            </div>
        </div>
    )
}