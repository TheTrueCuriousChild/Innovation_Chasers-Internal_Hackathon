import './footer.css';
import ContactInfo from './ContactInfo';
import QuickLinks from './QuickLinks';
import SocialMedia from './SocialMedia';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <ContactInfo />
        <QuickLinks />
        <SocialMedia />
      </div>

      <div className="footerBottom">
        <p>&copy; {new Date().getFullYear()} Hari Ram Turfs. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
