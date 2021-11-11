import { Link } from 'react-router-dom';
import './styles.css';

const ButtonIcon = () => {
  return (
       <Link to="/products">
        <button className="btn-icon-container">
          <h6>VER CATÁLOGO</h6>
        </button>
        </Link>
  );
};

export default ButtonIcon;
