interface pictureObj {
    url: string,
    title: string,
}

export default function PicsColumn({ pictures }: { pictures: Array<pictureObj> }) {
    return (
        <div className="pics-column">
            {pictures.map((picture, index) => {
                return <img key={index + picture.title} src={picture.url} alt={picture.title} />
            })}
        </div>
    )
}