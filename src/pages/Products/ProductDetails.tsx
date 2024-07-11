import { TProduct } from "../../types";
import { useGetSingleProuctQuery } from "../../redux/features/product/productApi";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleProuctQuery(id);
  const productDetails: TProduct = data?.data;

  return (
    <div className="mx-auto text-white">
      <div className="card shadow-xl mt-6 bg-secondary p-10 space-y-10">
        <div className="relative glass bg-[#272727] p-5">
          <div className="max-w-xl mx-auto h-[200px] sm:h-[250px] md:h-[365px]">
            <img
              src={productDetails?.image}
              alt="Post"
              className="h-[200px] sm:h-[250px] md:h-[365px] mx-auto object-contain xs:object-cover"
            />
          </div>
        </div>
        <div className="card-body p-0">
          <h2 className="text-base xs:text-2xl font-semibold">
            {productDetails?.name}
          </h2>
          <h2 className="text-base xs:text-2xl font-semibold">
            $ {productDetails?.price}
          </h2>
          <div>
            <span className="text-[10px] xs:text-xs text-[#8A8A8A]">
              Description
            </span>
            <p className="text-xs xs:text-base">
              {productDetails?.description}
            </p>
          </div>
          <div>
            <span className="text-[10px] xs:text-xs text-[#8A8A8A]">
              Category
            </span>
            <p className="text-xs xs:text-base">
              {productDetails?.category?.name}
            </p>
          </div>
          <div>
            <span className="text-[10px] xs:text-xs text-[#8A8A8A]">Brand</span>
            <p className="text-xs xs:text-base">{productDetails?.brand}</p>
          </div>
          <div>
            <span className="text-[10px] xs:text-xs text-[#8A8A8A]">
              In Stock
            </span>
            <p className="text-xs xs:text-base">
              {productDetails?.stockQuantity} pc
            </p>
          </div>
          <div>
            <span className="text-[10px] xs:text-xs text-[#8A8A8A]">
              Rating
            </span>
            <p className="text-xs xs:text-base">{productDetails?.rating}</p>
          </div>
          <div className="card-actions justify-end items-end">
            <button
              className={`bg-accent h-[30px] w-[100px] xs:h-[50px] xs:w-[177px] rounded-lg xs:rounded-xl text-sm xs:text-lg font-semibold text-black hover:scale-110 duration-500 ${
                productDetails?.stockQuantity <= 0 &&
                "opacity-50 cursor-default"
              }`}
              disabled={productDetails?.stockQuantity <= 0 ? true : false}
            >
              {productDetails?.stockQuantity ? "Add to Cart" : "Sold Out"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
