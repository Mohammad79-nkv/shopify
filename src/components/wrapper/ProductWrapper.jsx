import { useSelector } from "react-redux";
import Product from "../common/Product";

const ProductWrapper = () => {
  const products = useSelector((state) => state.products.filteredProducts);

  return (
    products &&
    products.map((p) => (
      <Product
        key={p.id}
        id={p.id}
        title={p.title}
        price={parseInt(p.price)}
        description={p.description}
        image={p.image}
        rating={p.rating.rate}
        count={p.rating.count}
      />
    ))
  );
};

export default ProductWrapper;
