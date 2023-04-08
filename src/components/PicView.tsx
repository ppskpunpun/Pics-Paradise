import { saveAs } from 'file-saver'
import { imageData } from './formatUnsplashResult'
import downloadIcon from '../assets/download-icon.svg'

export default function PicView({ image }: { image: imageData }) {
    function download() {
        saveAs(image.links.download, `${image.description}.jpg`)
    }

    return (
        <div className="pic-view">
            <div className="img-wrapper">
                <img src={image.url} />
            </div>
            <div className="pic-info">
                <span>Resolution: {image.width} x {image.height}</span>
                <a href={image.links.html} target="_blank">view on Unsplash</a>
                <div className="download-btn-wrapper">
                    <button className="download-btn" onClick={download}>
                        <img src={downloadIcon} alt="download icon" width="24" />
                    </button>
                </div>
            </div>
        </div>
    )
}   