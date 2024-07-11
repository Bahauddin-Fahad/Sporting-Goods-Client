import { useNavigate } from "react-router-dom";
import { TProduct } from "../../types";
type Props = {
  product: TProduct;
};
const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="card bg-secondary shadow-md border border-black shadow-black text-white rounded-2xl h-full">
      <figure className="glass rounded-lg p-5 mb-3 m-7">
        <img
          src={product.image}
          alt=""
          className="h-[150px] w-full object-contain hover:scale-110 duration-500"
        />
      </figure>
      <div className="card-body px-5">
        <h2 className="card-title">{product?.name}</h2>
        <p>{product?.description}</p>
        <p>Price: ${product?.price}</p>
        <p>Category: {product?.category?.name}</p>
        <p>Brand: {product?.brand}</p>
        <p>Stock: {product?.stockQuantity} Pc</p>
        <p>Rating: {product?.rating} </p>
        <div className="card-actions justify-end items-end mt-5">
          <button
            onClick={() => navigate(`/product/${product._id}`)}
            className="btn btn-accent text-primary w-full font-bold hover:scale-110 duration-500"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
