import './Our.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MdArrowForwardIos } from 'react-icons/md';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import GEE from '../../assets/reducao.png';
import eventos from '../../assets/ecologia.png';
import reflorestamento from '../../assets/reflorestamento.png';
import compensacao from '../../assets/compensacao.png';

export function Our() {
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
    <div className="Our-container">
      <article className="container-texts-our">
        <h1>Nossos Serviços</h1>
      </article>
      <Carousel
        className="container-carousel-our"
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && <CustomArrowPrev onClick={() => onClickHandler()} />
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && <CustomArrowNext onClick={() => onClickHandler()} />
        }>
        <div id="servicos" className="container-our-carousel1">
          <h1>Inventário de Emissão de Gases de Efeito Estufa (GEE)</h1>
          <img
            src={GEE}
            alt="Imagem 1 do Carousel, nome do elemento Co2 o carbono, imagem com cor verde"
          />
          <p>
            Mapeamos e quantificamos as emissões de GEE da sua organização,
            usando padrões compatíveis com ISO 14000 e IPCC. Realize um
            inventário para definir metas, fortalecer sua reputação e tomar
            decisões estratégicas.
          </p>
        </div>
        <div className="container-our-carousel2">
          <h1>Evento Carbono Neutro</h1>
          <img
            src={eventos}
            alt="Imagem 2 do carousel, um planeta verde com muitas árvores"
          />
          <p>
            Um evento é neutro em carbono quando as emissões de gases de efeito
            estufa (GEE) provenientes das ações pré evento, durante o evento e
            pós evento são devidamente quantificadas e uma ação de compensação
            ambiental (neutralização) é realizada na mesma proporção. Trabalhe
            conosco e demonstre sua consciencia sobre a mudança do clima e a
            sustentabilidade, além de aumentar sua chance de captar patrocínio.
          </p>
        </div>
        <div className="container-our-carousel3">
          <h1>Créditos de Carbono</h1>
          <img src={reflorestamento} alt="" />
          <p>
            Desenvolvemos soluções personalizadas para geração ou uso de
            créditos de carbono. Apoiamos projetos verificados de redução ou
            remoção de emissões em áreas como preservação, reflorestamento e
            energias renováveis.
          </p>
        </div>
        <div className="container-our-carousel4">
          <h1>Compensação de Emissões</h1>
          <img src={compensacao} alt="" />
          <p>
            Mitigamos emissões residuais através de compensações de carbono.
            Avaliamos opções no mercado voluntário para encontrar as mais
            adequadas aos objetivos climáticos dos nossos clientes.
          </p>
        </div>
      </Carousel>
    </div>
  );
}
