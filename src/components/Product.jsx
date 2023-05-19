import './Product.css';

const Product = ({ image, title, description }) => {
  return (
    <div className="box">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <p className="productTitle">{title}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Product;
