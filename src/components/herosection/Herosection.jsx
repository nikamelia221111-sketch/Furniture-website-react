import './Herosection.css'
import { Link } from 'react-router-dom'

function HeroSection({ user }) {
  return (
    <div className="herosec">
      <div>
        <span>New Arrival</span>
        <h2>Discover Our New Collection</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis.
        </p>
        {user ? (
          <button>BUY NOW</button>
        ) : (
          <Link className="hero-button" to="/register">BUY NOW</Link>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
