import { useEffect } from "react";
import ProductCard from "../components/product/ProductCard";
import { useGetProductsQuery } from "../redux/features/product/productApi";
import { TProduct } from "../types";
// import { RiFilter2Fill } from "react-icons/ri";
import { BsSortDownAlt, BsSortDown } from "react-icons/bs";
const AllProducts = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  const { data } = useGetProductsQuery(undefined);
  const products: TProduct[] = data?.data;

  return (
    <div className="space-y-10">
      <div
        className="lg:h-[340px] h-[200px] banner-background"
        data-aos="zoom-in"
      >
        <div className="flex flex-col justify-center items-center h-full lg:-mt-8 text-white text-center">
          <p className="text-4xl text-center font-bold my-3 space-x-5 uppercase">
            <span className="font-normal tracking-wide text-[#bdbdbd9e]">
              ALL
            </span>
            <span className="text-accent">Sports Equipments</span>
          </p>

          <p className="text-justify max-w-2xl text-white">
            Explore our top-quality sports equipment, from footballs and cricket
            bats to basketballs. Designed for all athletes, our gear enhances
            performance and supports your journey. Find essential accessories
            and training aids to excel in your sport. Upgrade your game with our
            durable and reliable products.
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-3 lg:-mt-16 -mt-10 text-white "></div>
      </div>

      <div className="flex justify-between">
        <div className="form-control max-w-sm">
          <label className="label">
            <span className="label-text text-white font-semibold">Search</span>
          </label>
          <input
            type="text"
            className="input input-bordered bg-[#F6F6F6] border-0 rounded focus:outline-none"
            placeholder={"Type Here"}
            // {...register("price", {
            //   required: {
            //     value: true,
            //     message: "Price is required",
            //   },
            // })}
          />
          {/* <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-600 text-sm">
                  {errors.price.message}
                </span>
              )}
            </label> */}
        </div>
        <div className="form-control max-w-sm">
          <label className="label">
            <span className="label-text text-white font-semibold">Search</span>
          </label>
          <input
            type="text"
            className="input input-bordered bg-[#F6F6F6] border-0 rounded focus:outline-none"
            placeholder={"Type Here"}
            // {...register("price", {
            //   required: {
            //     value: true,
            //     message: "Price is required",
            //   },
            // })}
          />
          {/* <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-600 text-sm">
                  {errors.price.message}
                </span>
              )}
            </label> */}
        </div>
        <div className="form-control max-w-sm">
          <label className="label">
            <div className="flex gap-2 justify-center items-center">
              <BsSortDownAlt className="text-white" />
              <span className="label-text text-white font-semibold">
                Sort By Price
              </span>
            </div>
          </label>
          <select className="select select-bordered w-full max-w-xs font-semibold">
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {products?.map((product: TProduct, index: number) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
