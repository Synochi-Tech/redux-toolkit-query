import { Product } from "../interfaces/product";
import {
  useGetProductsQuery,
} from "../services/dummyJson";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { data: productResponse, isLoading } = useGetProductsQuery();
  return (
    <div className="product">
      <h2 className="text-4xl em:pb-4 font-semibold pb-2 mb-4">Product List</h2>
      {isLoading ? (
        "Loading"
      ) : (
        <div className="flex justify-between flex-wrap">
          {productResponse?.products.map((product: Product) => {
            return <ProductItem {...product} key={product.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
