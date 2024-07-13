/* eslint-disable @typescript-eslint/no-explicit-any */

import { Controller, FieldError, FieldValues, useForm } from "react-hook-form";
import { TCategory, TProduct } from "../../types";
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from "../../redux/features/product/productApi";
import RatingInput from "./RatingInput";
import { toast } from "react-toastify";
import categoryJson from "../../assets/jsons/categories.json";

const ProductModal = ({ product, setProduct, setModalType }: any) => {
  const [addProduct, { data: addedData }] = useAddProductMutation();
  const [updateProduct, { data: updatedData }] = useUpdateProductMutation();

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      name: product?.name,
      description: product?.description,
      price: Number(product?.price),
      image: product?.image,
      brand: product?.brand,
      category: product?.category,
      stockQuantity: Number(product?.stockQuantity),
      rating: product?.rating,
    },
  });

  const onSubmit = async (data: any) => {
    const details = {
      name: data?.name,
      description: data?.description,
      price: Number(data?.price),
      image: data?.image,
      brand: data?.brand,
      category: data?.category,
      stockQuantity: Number(data?.stockQuantity),
      rating: data?.rating,
    };

    Object.keys(product).length <= 0
      ? handleAddProduct(details)
      : handleEditProduct(details);
  };
  const handleAddProduct = (details: Partial<TProduct>) => {
    addProduct(details);
  };
  if (addedData?.status === 200) {
    toast.success("Product Added Successfully", {
      theme: "colored",
      toastId: "added",
    });
    setModalType("");
    setProduct({});
  }

  const handleEditProduct = (details: Partial<TProduct>) => {
    const options = {
      id: product?._id,
      data: details,
    };

    updateProduct(options);
  };
  if (updatedData?.status === 200) {
    toast.success("Product Updated Successfully", {
      theme: "colored",
      toastId: "updated",
    });
    setModalType("");
    setProduct({});
  }

  return (
    <div>
      <input type="checkbox" id="product-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-secondary max-w-4xl !important space-y-4">
          <h3 className="font-bold text-lg text-white text-left">{`${
            Object.keys(product).length <= 0 ? "Add" : "Edit"
          } Product`}</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-12 gap-x-5"
          >
            <div className="form-control w-full col-span-12 sm:col-span-6">
              <label className="label">
                <span className="label-text text-[#E2E2E2] font-semibold">
                  Name *
                </span>
              </label>
              <input
                placeholder={product?.name || `Name of the Product`}
                defaultValue={product?.name && product?.name}
                type="text"
                className="input input-bordered bg-[#2E2D2D] text-white border-0 rounded-none focus:outline-none"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-600 text-sm">
                    {(errors.name as FieldError).message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full col-span-12 sm:col-span-6">
              <label className="label">
                <span className="label-text text-[#E2E2E2] font-semibold">
                  Price *
                </span>
              </label>
              <input
                type="number"
                min={0}
                className="input input-bordered bg-[#2E2D2D] text-white border-0 rounded-none"
                placeholder={product?.price || "000"}
                defaultValue={product?.price && product?.price}
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is required",
                  },
                })}
              />
              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-600 text-sm">
                    {(errors.price as FieldError).message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full col-span-12">
              <label className="label">
                <span className="label-text text-white font-semibold">
                  Description *
                </span>
              </label>
              <textarea
                placeholder={"Description"}
                defaultValue={product?.description && product?.description}
                className="textarea textarea-bordered bg-[#2E2D2D] text-white border-0 rounded-none  h-24"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is required",
                  },
                })}
              />
              <label className="label">
                {errors.description?.type === "required" && (
                  <span className="label-text-alt text-red-600 text-sm">
                    {(errors.description as FieldError).message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full col-span-12 sm:col-span-6">
              <label className="label">
                <span className="label-text text-[#E2E2E2] font-semibold">
                  Category *
                </span>
              </label>
              <select
                className="select bg-[#2E2D2D] text-white border-0 rounded-none focus:outline-none"
                defaultValue={product?.category && product?.category}
                {...register("category", {
                  required: {
                    value: true,
                    message: "Category is required",
                  },
                })}
              >
                <option disabled defaultValue={""}>
                  Select One
                </option>
                {categoryJson?.map((category: TCategory, index: number) => (
                  <option key={index}>{category?.name}</option>
                ))}
              </select>
              <label className="label">
                {errors.category?.type === "required" && (
                  <span className="label-text-alt text-red-600 text-sm">
                    {(errors.category as FieldError).message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full col-span-12 sm:col-span-6">
              <label className="label">
                <span className="label-text text-[#E2E2E2] font-semibold">
                  Brand *
                </span>
              </label>
              <input
                placeholder={product?.brand || `Product Brand`}
                defaultValue={product?.brand && product?.brand}
                type="text"
                className="input input-bordered bg-[#2E2D2D] text-white border-0 rounded-none focus:outline-none"
                {...register("brand", {
                  required: {
                    value: true,
                    message: "Brand is required",
                  },
                })}
              />
              <label className="label">
                {errors.brand?.type === "required" && (
                  <span className="label-text-alt text-red-600 text-sm">
                    {(errors.brand as FieldError).message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full col-span-12 sm:col-span-6">
              <label className="label">
                <span className="label-text text-[#E2E2E2] font-semibold">
                  Stock Quantity *
                </span>
              </label>
              <input
                type="number"
                min={0}
                className="input input-bordered bg-[#2E2D2D] text-white border-0 rounded-none"
                defaultValue={product?.stockQuantity && product?.stockQuantity}
                {...register("stockQuantity", {
                  required: {
                    value: true,
                    message: "Stock Quanitity is required",
                  },
                })}
              />
              <label className="label">
                {errors.stockQuantity?.type === "required" && (
                  <span className="label-text-alt text-red-600 text-sm">
                    {(errors.stockQuantity as FieldError).message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full col-span-12 sm:col-span-6">
              <label className="label">
                <span className="label-text text-[#E2E2E2] font-semibold">
                  Image Link *
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered bg-[#2E2D2D] text-white border-0 rounded-none focus:outline-none"
                placeholder={product?.image || `Image Link`}
                defaultValue={product?.image && product?.image}
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image Link is required",
                  },
                })}
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-600 text-sm">
                    {(errors.image as FieldError).message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full col-span-12 sm:col-span-12 mb-4">
              <label className="label">
                <span className="label-text text-[#E2E2E2] font-semibold">
                  Rating *
                </span>
              </label>
              <Controller
                name="rating"
                control={control}
                render={({ field }) => (
                  <RatingInput
                    {...field}
                    control={control}
                    defaultValue={product?.rating}
                  />
                )}
              />

              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-600 text-sm">
                    {(errors.image as FieldError).message}
                  </span>
                )}
              </label>
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn btn-md btn-accent w-full font-bold col-span-6"
            />
            <label
              onClick={() => {
                setModalType("");
                setProduct({});
              }}
              htmlFor="product-modal"
              className="btn btn-md w-full font-bold col-span-6"
            >
              Cancel
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
