import InstagramIcon from '../images/instagram.png';
import MailIcon from '../images/email.png';

export default function Home() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer>
      <div className="icons">
        <a href="https://www.instagram.com/heloise_bld/" target='_blank' rel="noreferrer">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
        <a href="mailto:heloisebld.pro@gmail.com?subject=J'ai%20vu%20ton%20site%20internet&body=Bonjour!%0D%0A%0D%0AJ'ai%20vu%20ton%20site%20internet%20et%20j'aimerais%20me%20connecter%20avec%20vous.">
          <img src={MailIcon} alt="Mail" />
        </a>
      </div>
      <div>
        <p>Copyright © {year}</p>
      </div>
    </footer>
  );
}