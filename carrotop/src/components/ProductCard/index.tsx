import "./styles.css";

import CardImg from '../../assets/images/product.png';
import ButtonCard from "../ButtonCard";



const ProductCard = () => {

    return (
            <div className="base-card product-card">
            <div className="card-top-container">
            <img src={CardImg} alt="Nome do carro" />
            </div>
            <div className="card-botton-container">
                <h6>Audi Supra TT</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            </div>
            <div>
                <ButtonCard />
            </div>

            </div>
    );
}

export default ProductCard;