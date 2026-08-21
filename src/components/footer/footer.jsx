import instagramShop1 from "../../assets/Instagram-Shop-1.webp";
import instagramShop2 from "../../assets/Instagram-Shop-2.webp";
import instagramShop3 from "../../assets/Instagram-Shop-3.webp";
import instagramShop4 from "../../assets/Instagram-Shop-4.webp";
import './footer.css';



function footer() {
    return (
        <>
            <footer>
                <div className="text">
                    <span>Beauty Care</span>
                    <p>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris.</p>
                    <a href="#">Follow Us</a>
                </div>
                <div>
                    <a href="#">Instagram Shop</a>
                    <div className="instagram-shop-images">
                        <div>
                        <img src={instagramShop1} alt="Instagram Shop image 1" />
                        <img src={instagramShop2} alt="Instagram Shop image 2" />
                        </div>
                        <div>
                        <img src={instagramShop3} alt="Instagram Shop image 3" />
                        <img src={instagramShop4} alt="Instagram Shop image 4" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}



export default footer