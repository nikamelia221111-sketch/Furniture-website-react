import beautifyYourSpaceImage from '../../assets/Beautify-Your-Space-img.webp'
import greenHalfCircle from '../../assets/green-half-circle.webp'
import './beautifyYourSpace.css'


function beautifyYourSpace() {
    return (
        <>
            <section className="Beautify-Your-Space">
                <div className="left">
                    <h2>Beautify Your Space</h2>
                    <p>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris.</p>
                    <button>LEARN MORE</button>
                </div>
                <div className="right">
                    <img src={beautifyYourSpaceImage} alt="girl looking to the side" />
                    <img className="deco" src={greenHalfCircle} alt="green elipse behind the girl" />
                </div>
            </section>
        </>
    )
}

export default beautifyYourSpace