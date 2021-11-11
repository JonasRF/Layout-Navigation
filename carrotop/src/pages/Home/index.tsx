import ButtonIcon from '../../components/ButtonIcon';
import  MainImage from '../../assets/images/main-image.png';

import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-content-container">
            <div>
              <h1>O carro perfeito para você</h1>
              <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
            </div>
          </div>
          <div className="home-image-container">
            <img src={MainImage} alt="Carro" />
          </div>
        </div>
        
        <div className="card-body">
            <div>
            <ButtonIcon />
            </div>
            <div>
              <p>Começe a navegar agora</p>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Home;
