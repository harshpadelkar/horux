import Product from './Product';
import './Products.css';
import products from '../data/products';

const Products = () => {
  return (
    <section className="blogs" id="blogs">
      <p className="text-4xl  font-extrabold mb-1 w-full relative pb-14 overflow-hidden md:text-[3vw] md:mb-2 text-center ">
        OUR <span className="span">PRODUCTS</span>
      </p>

      <div className="box-container">
        {products.map((product, i) => {
          return (
            <Product
              key={i + 1}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Products;
