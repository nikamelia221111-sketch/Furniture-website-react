import ICimage1 from '../../assets/inspration-collection-img1.webp'
import ICimage2 from '../../assets/inspration-collection-img2.webp'
import ICimage3 from '../../assets/inspration-collection-img3.webp'
import './inspirationCollection.css'



function inspirationCollection() {
    return (
        <>
            <section className="Inspiration-Collection">
                <div>
                    <h2>
                        Inspiration Collection
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="Inspiration-Collection-images">
                    <img className="image1" src={ICimage1}
                        alt="inspiration collection image number one" />
                    <img className="image2" src={ICimage2}
                        alt="inspiration collection image number one" />
                    <img className="image3" src={ICimage3}
                        alt="inspiration collection image number one" />
                </div>
            </section>
        </>
    )
}


export default inspirationCollection