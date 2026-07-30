import freedelivery from '../../assets/Free-delivery.svg'
import authenticity from '../../assets/authenticity.svg'
import support from '../../assets/support.svg'
import './headerinfo.css'

function Headerinfo() {
    return (
        <>
            <div className="headerinfo">
                <div>
                    <div>
                        <img src={freedelivery} alt="free-delivery-icon" />
                        <div className="test">
                            <p>Free Delivery</p>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                    <div className="gap">
                        <img src={support} alt="support-icon" />
                        <div className="test">
                            <p>Support 24/7</p>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                    <div className="gap">
                        <img src={authenticity} alt="authenticity-icon" />
                        <div className="test">
                            <p>100% Authentic</p>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Headerinfo