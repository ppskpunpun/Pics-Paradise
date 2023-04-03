import PicsColumn from './PicsColumn'

export default function PicturesSection() {

    const pictures = testIMG.map((image) => {
        return { url: image, title: '' }
    })

    return (
        <section className="pictures-section">
            <PicsColumn pictures={pictures.slice(0, 10)} />
            <PicsColumn pictures={pictures.slice(10, 19)} />
            <PicsColumn pictures={pictures.slice(20, 30)} />
        </section>
    )
}

const testIMG = [
    'https://images.unsplash.com/photo-1667964394218-0759343685e1?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://plus.unsplash.com/premium_photo-1670002336255-6c713d702ade?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1678031523788-282b508c76dc?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1678049244570-57076020c39b?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1678184539029-621565c4226d?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1678228957129-528f6749f940?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1678260748335-4927790327c4?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1678314530817-68b4966f1b07?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1678539923557-9ff9829318d3?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1678572823447-45fc146df43c?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1678614034663-f2518bf244c2?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1678640608352-f8f9c81647cf?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1678695692040-e9a39502c357?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1678729984335-bfaff3572cbe?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1678735953346-fef224d2a15e?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1678786202821-cd5cd3fa3f3a?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1678889722723-d2b6e77262dd?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1679076681908-f67832c02771?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1679098757073-7b84d2b7ae21?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1679397113339-9a68e04e183c?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1679408744722-f6bf59989380?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1679419930974-e8171969aea0?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1679476247743-c35de31fab88?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1679560307941-3a8af87a5c16?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1679595021359-9a1d9b543bf4?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1679673177212-8a011a4f86f7?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1679720481733-39486c49e56f?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://plus.unsplash.com/premium_photo-1679899856167-d86b4016fc65?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1680169276046-d90d8f233b8a?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1680169287465-d995e9bb6b99?ixid=Mnw0MzA3MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA1MzEzNjc&ixlib=rb-4.0.3'
]