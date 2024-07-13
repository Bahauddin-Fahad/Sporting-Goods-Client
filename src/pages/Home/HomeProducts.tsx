import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import { useGetProductsQuery } from "../../redux/features/product/productApi";
import { TProduct } from "../../types";
import { AiFillProduct } from "react-icons/ai";
import Loading from "../Loading/Loading";

const HomeProducts = () => {
  const navigate = useNavigate();
  const { data: productData, isLoading } = useGetProductsQuery({});
  const products: TProduct[] = productData?.data;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col space-y-5 lg:space-y-10">
      <div className="flex gap-2 text-3xl lg:text-5xl text-white">
        <AiFillProduct data-aos="slide-right" className="text-accent" />
        <h1 data-aos="slide-left" className="font-semibold">
          Our Products
        </h1>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {products?.slice(0, 6)?.map((product: TProduct, index: number) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <button
        className="btn btn-white font-bold w-48 mx-auto"
        onClick={() => navigate("/all-products")}
      >
        See All
      </button>
    </div>
  );
};

export default HomeProducts;
