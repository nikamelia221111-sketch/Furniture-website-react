import dining from '../../assets/Dining-img.webp'
import living from '../../assets/Living-img.webp'
import bedroom from '../../assets/Bedroom-img.webp'
import './BrowseRange.css'



function BrowseRange () {
    return (
        <>
        <section className="Browse-The-Range">
            <div>
                <h2>Browse The Range</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="Browse-The-Range-images">
                <div>
                    <img src={dining} alt="dining room image"/>
                    <p>Dining</p>
                </div>
                <div>
                    <img src={living} alt="living room image"/>
                    <p>Living</p>
                </div>
                <div>
                    <img src={bedroom} alt="bedroom image"/>
                    <p>Bedroom</p>
                </div>
            </div>
        </section>
        </>
    )
}



export default BrowseRange