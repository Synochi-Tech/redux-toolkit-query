import { Product } from "../interfaces/product";
import { useGetProductsQuery } from "../services/dummyJson";

const ProductList = () => {
  const { data, isLoading } = useGetProductsQuery();
  return (
    <div className="product">
      <h2 className="text-4xl em:pb-4 font-semibold pb-2">Product List</h2>
      {isLoading ? (
        "Loading"
      ) : (
        <div className="">
          {data?.products.map(({ title, id }: Product) => {
            return (
              <h3 className="text-2xl pb-3" key={id}>
                {title}
              </h3>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
