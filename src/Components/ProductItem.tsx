import { Product } from "../interfaces/product";

const ProductItem = ({ id, title, description }: Product) => {
  return (
    <div className="w-[30%] flex">
      <div className="border px-4 py-6 mb-6 border-gray-700 rounded-lg">

        <h3 className="text-2xl pb-3" key={id}>
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
