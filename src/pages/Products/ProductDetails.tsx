import { TProduct } from "../../types";
import { useGetSingleProuctQuery } from "../../redux/features/product/productApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import RatingInput from "../../components/product/RatingInput";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toast } from "react-toastify";
import { addProduct } from "../../redux/features/product/productSlice";
import QuantitySelector from "../../components/ui/QuantitySelector";

const ProductDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { id } = useParams();
  const { data } = useGetSingleProuctQuery(id);
  const productDetails: TProduct = data?.data;

  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState(0);
  const [inStock, setInStock] = useState(productDetails?.stockQuantity || 0);

  const isDisabled = !(inStock && quantity);
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (productDetails?.stockQuantity) {
      setInStock(productDetails.stockQuantity);
    }
  }, [productDetails]);

  const handleIncrement = () => {
    if (inStock > 1) {
      setQuantity((prev) => prev + 1);
      setInStock((prev: number) => prev - 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
      setInStock((prev: number) => prev + 1);
    }
  };

  const handleAddToCart = () => {
    const existingProduct = products.find(
      (product) => product.id === productDetails?._id
    );

    if (existingProduct) {
      // Product already exists in the cart
      toast.error("This product is already in your cart.", {
        theme: "colored",
      });
    } else {
      // Product does not exist in the cart, proceed with dispatching
      const productInfo = {
        id: productDetails?._id,
        name: productDetails?.name,
        price: productDetails?.price,
        quantity,
        image: productDetails?.image,
        inStock,
      };

      dispatch(addProduct(productInfo));
      toast.success("Product added to cart successfully.", {
        theme: "colored",
      });
    }
  };
  return (
    <div className="mx-auto text-white">
      <div
        className="h-[200px] flex flex-col justify-center items-center"
        data-aos="zoom-in"
      >
        <p className="text-4xl text-center font-bold my-3 space-x-5 uppercase">
          <span className="font-normal tracking-wide text-[#bdbdbd9e]">
            {productDetails?.name.split(" ")[0]}
          </span>
          <span className="text-accent">
            {productDetails?.name.split(" ").slice(1).join(" ")}
          </span>
        </p>
      </div>
      <div className="card shadow-xl mt-6 bg-secondary p-10 space-y-10">
        <div className="relative glass bg-[#272727] p-5">
          <div className="max-w-xl mx-auto h-[200px] sm:h-[250px] md:h-[365px] cursor-pointer">
            <PhotoProvider>
              <PhotoView src={productDetails?.image}>
                <img
                  src={productDetails?.image}
                  alt="Post"
                  className="h-[200px] sm:h-[250px] md:h-[365px] mx-auto object-contain xs:object-cover"
                />
              </PhotoView>
            </PhotoProvider>
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
            <span className="text-[10px] xs:text-xs sm:text-lg text-[#8A8A8A]">
              Description
            </span>
            <p className="text-xs xs:text-base sm:text-xl">
              {productDetails?.description}
            </p>
          </div>
          <div>
            <span className="text-[10px] xs:text-xs sm:text-lg text-[#8A8A8A]">
              Category
            </span>
            <p className="text-xs xs:text-base sm:text-xl">
              {productDetails?.category}
            </p>
          </div>
          <div>
            <span className="text-[10px] xs:text-xs sm:text-lg text-[#8A8A8A]">
              Brand
            </span>
            <p className="text-xs xs:text-base sm:text-xl">
              {productDetails?.brand}
            </p>
          </div>
          <div>
            <span className="text-[10px] xs:text-xs sm:text-lg text-[#8A8A8A]">
              In Stock
            </span>
            <p className="text-xs xs:text-base sm:text-xl">
              {productDetails?.stockQuantity} pc
            </p>
          </div>
          <div>
            <span className="text-[10px] xs:text-xs sm:text-lg text-[#8A8A8A]">
              Rating
            </span>
            <p className="text-xs xs:text-base sm:text-xl">
              <RatingInput
                name="rating"
                defaultValue={productDetails?.rating}
                readOnly={true}
              />
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="grow">
                <h1 className="text-left text-[10px] xs:text-xs sm:text-lg text-[#8A8A8A]">
                  Select quantity
                </h1>
              </div>
              <QuantitySelector
                quantity={quantity}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                inStock={inStock}
              />
            </div>
            <div className="card-actions justify-end items-end">
              <button
                onClick={handleAddToCart}
                className={`h-[30px] w-[100px] xs:h-[50px] xs:w-[177px] rounded-lg xs:rounded-xl text-sm xs:text-lg font-semibold text-black ${
                  inStock && quantity
                    ? "bg-accent hover:scale-110 duration-500"
                    : "cursor-not-allowed bg-gray-300 text-gray-500"
                }`}
                // disabled={productDetails?.stockQuantity <= 0 ? true : false}
                disabled={isDisabled ? true : false}
              >
                {productDetails?.stockQuantity ? "Add to Cart" : "Sold Out"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
