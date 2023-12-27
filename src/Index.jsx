import './Index.css';
import { FaWhatsapp } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { Footer } from './Components/Footer/Footer';
import { Form } from './Components/Form/Form';
import { Home } from './Components/Home/Home';
import { Menu } from './Components/Menu/Menu';
import { Our } from './Components/OurServices/Our';

export function Index() {
  return (
    <div>
      <div className="instagram-button">
        <a href="https://www.instagram.com/4lesscarbon/" target="blank">
          <BsInstagram className="insta-icon" />
        </a>
      </div>
      <div className="whatsapp-button">
        <a
          className="wpp"
          href="https://wa.me/5561993367067?text=Gostaria de saber mais sobre os serviços que a 4less tem a oferecer. (favor não apagar esta mensagem.)"
          target="_blank"
          rel="noopener noreferrer">
          <FaWhatsapp className="whats-icon" />
        </a>
      </div>
      <Menu />
      <Home />
      <Our />
      <Form />
      <Footer />
    </div>
  );
}
