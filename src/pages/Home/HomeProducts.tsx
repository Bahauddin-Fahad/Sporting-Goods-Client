import { useGetProductsQuery } from "../../redux/features/product/productApi";
import { TProduct } from "../../types";

const HomeProducts = () => {
  const { data } = useGetProductsQuery(undefined);
  const products: TProduct[] = data?.data;
  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-white text-5xl font-semibold">Our Products</h1>
      <div className="grid grid-cols-3 gap-10">
        {products?.slice(0, 6)?.map((product: TProduct) => (
          <div className="bg-secondary shadow-md border border-black shadow-black text-white rounded-2xl">
            <figure className="bg-white rounded-lg p-5 mb-3 m-7">
              <img
                src={product.image}
                alt="Shoes"
                className="h-[250px] w-full object-contain"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product?.name}</h2>
              <p>{product?.description}</p>
              <p>Price: ${product?.price}</p>
              <p>Category: {product?.category?.name}</p>
              <p>Brand: {product?.brand}</p>

              <div className="card-actions justify-end items-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-white w-48">See All</button>
    </div>
  );
};

export default HomeProducts;
