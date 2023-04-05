import { imageData } from './formatUnsplashResult'

export default function PicsColumn({ images }: { images: Array<imageData> }) {
    return (
        <div className="pics-column">
            {images.map((image, index) => {
                return <img key={index + image.title} src={image.url} alt={image.title} />
            })}
        </div>
    )
}