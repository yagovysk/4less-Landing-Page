import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MdArrowForwardIos } from 'react-icons/md';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import visao from '../../assets/fotoA.jpg';
import foto1 from '../../assets/fotoc1.jpg';
import foto2 from '../../assets/foto1.jpg';
import './Home.css';

export function Home() {
  const customArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '24px',
    zIndex: 1,
  };

  const CustomArrowPrev = ({ onClick }) => (
    <div
      style={{ ...customArrowStyles, left: '10px' }}
      onClick={onClick}
      title="Previous">
      <MdOutlineArrowBackIosNew className="icon-left" />
    </div>
  );

  const CustomArrowNext = ({ onClick }) => (
    <div
      style={{ ...customArrowStyles, right: '10px' }}
      onClick={onClick}
      title="Next">
      <MdArrowForwardIos className="icon-right" />
    </div>
  );
  return (
    <div id="home" className="container-home">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && <CustomArrowPrev onClick={() => onClickHandler()} />
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && <CustomArrowNext onClick={() => onClickHandler()} />
        }>
        <div className="container-carousel1">
          <img src={foto1} alt="" />
          <article className="container-texts">
            <h1>Bem-Vindo à 4Less Carbon</h1>
            <h2>
              A 4Less Carbon é uma consultoria especializada em oferecer
              soluções de sustentabilidade com o propósito de apoiar as
              organizações na transição para uma economia de baixa emissão de
              carbono.
            </h2>
          </article>
        </div>
        <div className="container-carousel2">
          <img src={foto2} alt="" />
          <article className="container-texts2">
            <h1>Nossos Valores</h1>
            <p>
              Excelência - Seja para nossos colegas de equipe ou clientes, nos
              mantemos nos mais altos padrões para sempre oferecer excelência.
              Vemos cada desafio como uma oportunidade de melhoria contínua.
            </p>
            <p>
              Autenticidade - Ajudamos nossos clientes, nossa empresa e uns aos
              outros a prosperar sem comprometer valores. Capacitamos a nós
              mesmos e aos outros para trabalhar com mais eficiência.
            </p>
            <p>
              Parceria - Trabalhamos em parceria com nossos clientes,
              fornecedores e colegas de equipe. Levamos tempo para entender o
              que cada cliente precisa e personalizamos nossa abordagem para
              maximizar o impacto. Pense em nós como parte de sua equipe.
            </p>
          </article>
        </div>
        <div className="container-carousel3">
          <img src={visao} alt="" />
          <article className="container-texts">
            <h1>Nossa Visão</h1>
            <h2>
              Impulsionar o investimento em ações que protejam o meio ambiente e
              promovam o desenvolvimento sustentável.
            </h2>
            <h1>Nossa Missão</h1>
            <h2>
              Fornecer soluções de consultoria personalizadas e inovadoras para
              empresas que desejam reduzir suas emissões de carbono.
            </h2>
            <a href="https://wa.me/5561993367067?text=Estamos prontos para te ajudar e tirar suas dúvidas. Vamos conversar? (Favor não apagar esta mensagem.)">
              Saiba mais
            </a>
          </article>
        </div>
      </Carousel>
    </div>
  );
}
