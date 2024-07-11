import { useEffect } from "react";
import ProductCard from "../../components/product/ProductCard";
import { useGetProductsQuery } from "../../redux/features/product/productApi";
import { TProduct } from "../../types";
import { useParams } from "react-router-dom";
// import { RiFilter2Fill } from "react-icons/ri";
// import {  BsSortDown } from "react-icons/bs";
const CategoryProducts = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  const { categoryId } = useParams();

  const { data } = useGetProductsQuery(categoryId);
  const products: TProduct[] = data?.data;
  console.log(products);

  return (
    <div className="space-y-10">
      <div className="h-[200px] banner-background" data-aos="zoom-in">
        <div className="flex flex-col justify-center items-center h-full lg:-mt-8 text-white text-center">
          <p className="text-4xl text-center font-bold my-3 space-x-5 uppercase">
            <span className="font-normal tracking-wide text-[#bdbdbd9e]">
              Equipments of
            </span>
            <span className="text-accent">{products?.[0].category?.name}</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-3 lg:-mt-16 -mt-10 text-white "></div>
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

export default CategoryProducts;
