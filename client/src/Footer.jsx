import './footer.css';
import twitterIcon from './assets/icons/twitter.png';
import instagramIcon from './assets/icons/instagram.png';
import facebookIcon from './assets/icons/facebook.png';
import whatsappIcon from './assets/icons/whatsapp.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        {/* Contact Info */}
        <div className="footerSection contactInfo">
          <h3>Contact Us</h3>
          <p>Email: support.hari.ram.turfs@gmail.com</p>
          <p>Phone: +91 9823445566</p>
          <p>Address: Shop No. 3, Naman Regency, Dhaanu, Mumbai 400001</p>
        </div>

        {/* Quick Links */}
        <div className="footerSection quickLinks">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">Price</a>
          <a href="#">Locations</a>
        </div>

        {/* Social Media with PNG icons */}
        <div className="footerSection socialMedia">
          <h3>Follow Us</h3>
          <div className="socialIcons">
            <a href="#">
              <img src={twitterIcon} alt="Twitter" />
              <span>Twitter</span>
            </a>
            <a href="#">
              <img src={instagramIcon} alt="Instagram" />
              <span>Instagram</span>
            </a>
            <a href="#">
              <img src={facebookIcon} alt="Facebook" />
              <span>Facebook</span>
            </a>
            <a href="#">
              <img src={whatsappIcon} alt="WhatsApp" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
