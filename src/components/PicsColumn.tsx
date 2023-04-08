import { imageData } from './formatUnsplashResult'
import Pic from './Pic'

export default function PicsColumn({ images }: { images: Array<imageData> }) {
    return (
        <div className="pics-column">
            {images.map((image, index) => {
                return <Pic key={index + image.description} image={image} />
            })}
        </div>
    )
}