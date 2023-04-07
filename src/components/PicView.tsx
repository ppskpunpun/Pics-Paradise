import { imageData } from './formatUnsplashResult'
import downloadIcon from '../assets/download-icon.svg'

export default function PicView({ image }: { image: imageData }) {

    return (
        <div className="pic-view">
            <div className="img-wrapper">
                <img src={image.url} />
            </div>
            <div className="pic-info">
                <span>Resolution: {image.width} x {image.height}</span>
                <a href={image.links.html} target="_blank">view on Unsplash</a>
                <button className="download-btn">
                    <img src={downloadIcon} alt="download icon" width="24" />
                </button>
            </div>
        </div>
    )
}