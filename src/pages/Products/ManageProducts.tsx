import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../redux/features/product/productApi";
import { TProduct } from "../../types";
import { PhotoProvider, PhotoView } from "react-photo-view";
import ProductModal from "../../components/product/ProductModal";
import DeleteModal from "../../components/product/DeleteModal";
import RatingInput from "../../components/product/RatingInput";
import Loading from "../Loading/Loading";

const ManageProducts = () => {
  const [product, setProduct] = useState({} || null);
  const [deleteProduct, setDeleteProduct] = useState({} || null);

  const { data, isLoading } = useGetProductsQuery(undefined);
  const products: TProduct[] = data?.data;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="text-black">
      <div
        className="h-[200px] flex flex-col justify-center items-center"
        data-aos="zoom-in"
      >
        <p className="text-4xl text-center font-bold my-3 space-x-5 uppercase">
          <span className="font-normal tracking-wide text-[#bdbdbd9e]">
            Manage
          </span>
          <span className="text-accent">Products</span>
        </p>
      </div>
      <div className="flex justify-between p-5">
        <h1 className="text-left font-bold text-2xl">Products</h1>
        <label
          htmlFor="product-modal"
          onClick={() => {
            setProduct({});
          }}
          className="btn btn-accent font-bold"
        >
          Add product
        </label>
      </div>
      <div className="overflow-x-auto m-5 ">
        <table className="table table-sm glass bg-white">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products?.map((product, index) => (
                <tr key={index} className="rounded-lg">
                  <th>{index + 1}</th>
                  {/* <th>{index + 1 + (currentPage - 1) * dataPerPage}</th> */}
                  <td>
                    <div className="w-20 p-2 rounded-md glass bg-black">
                      <PhotoProvider>
                        <PhotoView src={product.image}>
                          <img src={product.image} alt="Post" className="" />
                        </PhotoView>
                      </PhotoProvider>
                    </div>
                  </td>
                  <td className="font-semibold">{product?.name}</td>
                  <td className="font-semibold">{product?.price}</td>
                  <td className="font-semibold">{product?.category?.name}</td>
                  <td className="font-semibold">{product?.brand}</td>
                  <td className="font-semibold">
                    <RatingInput
                      readOnly={true}
                      name={product.name}
                      defaultValue={product?.rating}
                    />
                  </td>
                  <td>
                    <div className="flex gap-2 items-center">
                      <label
                        onClick={() => {
                          setProduct(product);
                        }}
                        htmlFor="product-modal"
                        className="btn btn-sm btn-success cursor-pointer"
                      >
                        Edit
                      </label>

                      <label
                        htmlFor="delete-modal"
                        onClick={() => {
                          setDeleteProduct(product);
                        }}
                        className="btn btn-sm btn-error cursor-pointer"
                      >
                        Delete
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="space-x-3 mt-4">
        {/* {totalPagesArray?.length > 1 &&
      totalPagesArray.map((page, index) => (
        <button
          key={index}
          onClick={() => handleCurrentPage(page)}
          className={`btn btn-sm ${
            page + 1 === currentPage && "btn-primary"
          }`}
        >
          {page + 1}
        </button>
      ))} */}
      </div>

      {product && <ProductModal product={product} setProduct={setProduct} />}

      {deleteProduct && (
        <DeleteModal
          deleteProductDetails={deleteProduct}
          setDeleteProductDetails={setDeleteProduct}
        />
      )}
    </div>
  );
};

export default ManageProducts;
