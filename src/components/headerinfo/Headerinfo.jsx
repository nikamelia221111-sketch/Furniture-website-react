import FreeDelivery from '../../assets/Free-delivery.svg'
import Authenticity from '../../assets/authenticity.svg'
import Support from '../../assets/Support.svg'
import SupportDark from '../../assets/Support-Dark.svg'
import AuthenticityDark from '../../assets/Authenticity-Dark.png'
import FreeDeliveryDark from '../../assets/Free-Delivery-Dark.svg'
import './headerinfo.css'

function Headerinfo({ darkMode = false }) {
    return (
        <>
            <div className="headerinfo">
                <div>
                    <div>
                        <img src={darkMode ? FreeDeliveryDark : FreeDelivery} alt="free-delivery-icon" />
                        <div className="test">
                            <p>Free Delivery</p>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                    <div className="gap">
                        <img src={darkMode ? SupportDark : Support} alt="support-icon" />
                        <div className="test">
                            <p>Support 24/7</p>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                    <div className="gap">
                        <img src={darkMode ? AuthenticityDark : Authenticity} alt="authenticity-icon" />
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