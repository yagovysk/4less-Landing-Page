import { IoLocationSharp } from 'react-icons/io5';
import './Footer.css';

export function Footer() {
  return (
    <footer className="container-footer">
      <h1>© Todos os direitos reservados a 4Less Carbon</h1>
      <h2>
        © Developed by{' '}
        <a href="https://togyrogroupvictory.com/" target="blank">
          {' '}
          Togyro <span>Group Victory</span>
        </a>
      </h2>
      <div className="footer-address">
        <IoLocationSharp className="icon-loc" />
        <p>
          CLN 302, BL D, Loja 07, Edifício Montandon Borges, Asa Norte,
          Brasília-DF, CEP: 70723-540
        </p>
      </div>
    </footer>
  );
}
