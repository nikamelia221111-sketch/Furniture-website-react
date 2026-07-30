import purchaseSecurely from '../../assets/Purchase-Securely-img.webp'
import shipsFromWarehouse from '../../assets/Ships-From-Warehouse-img.webp'
import styleYourRoom from '../../assets/Style-Your-Room-img.webp'
import './HowItWorks.css'





function HowItWorks() {
    return (
        <section className="How-It-Works">
            <div>
                <h2>How It Works</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="How-It-Works-Images">
                <div>
                    <img src={purchaseSecurely} alt="purchase securely image"/>
                        <h3>Purchase Securely</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <img src={shipsFromWarehouse} alt="ships from warehouse image"/>
                        <h3>Ships From Warehouse</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <img src={styleYourRoom} alt="style your room image"/>
                        <h3>Style Your Room</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </section>
    )
}



export default HowItWorks