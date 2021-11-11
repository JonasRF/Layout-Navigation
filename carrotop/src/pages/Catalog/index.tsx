import ProductCard from '../../components/ProductCard';

import './styles.css';

const Catalog = () => {
  return (
    <>
      <div className="card-body-catalog">
        <div className="input-group mb-3 input-card">
          <input
            type="text"
            className="form-control"
            placeholder="Digite sua busca"
            aria-label="Digite sua busca"
          />
          <a href="link">
            <button className="btn-card-top">
              <h6>BUSCAR</h6>
            </button>
          </a>
        </div>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
