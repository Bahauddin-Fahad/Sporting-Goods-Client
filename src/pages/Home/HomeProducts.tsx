import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import { useGetProductsQuery } from "../../redux/features/product/productApi";
import { TProduct } from "../../types";
import { AiFillProduct } from "react-icons/ai";

const HomeProducts = () => {
  const navigate = useNavigate();
  const { data } = useGetProductsQuery(undefined);
  const products: TProduct[] = data?.data;
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex gap-2 text-5xl text-white">
        <AiFillProduct className="text-accent" />
        <h1 className="font-semibold">Our Products</h1>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {products?.slice(0, 6)?.map((product: TProduct, index: number) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <button
        className="btn btn-white w-48 mx-auto"
        onClick={() => navigate("/all-products")}
      >
        See All
      </button>
    </div>
  );
};

export default HomeProducts;
