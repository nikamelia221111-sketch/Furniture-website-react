import instagramShop1 from "../../assets/Instagram-Shop-1.webp";
import instagramShop2 from "../../assets/Instagram-Shop-2.webp";
import instagramShop3 from "../../assets/Instagram-Shop-3.webp";
import instagramShop4 from "../../assets/Instagram-Shop-4.webp";
import './footer.css';



function footer() {
    return (
        <>
            <footer>
                <div class="text">
                    <span>Beauty Care</span>
                    <p>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris.</p>
                    <span>Follow Us</span>
                </div>
                <div>
                    <span>
                        Instagram Shop
                    </span>
                    <div class="instagram-shop-images">
                        <img src={instagramShop1} alt="Instagram Shop image 1" />
                        <img src={instagramShop2} alt="Instagram Shop image 2" />
                        <img src={instagramShop3} alt="Instagram Shop image 3" />
                        <img src={instagramShop4} alt="Instagram Shop image 4" />
                    </div>
                </div>
            </footer>
        </>
    )
}



export default footer