import twitterIcon from "../../../assets/icons/twitter.png";
import instagramIcon from "../../../assets/icons/instagram.png";
import facebookIcon from "../../../assets/icons/facebook.png";
import whatsappIcon from '../../../assets/icons/whatsapp.png';

function SocialMedia() {
  return (
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
  );
}

export default SocialMedia;
