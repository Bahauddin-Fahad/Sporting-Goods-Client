/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from "axios";

import { ReactElement, ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
// import { MdOutlineAddPhotoAlternate } from "react-icons/md";
// import { toast } from "react-toastify";
// import { RxCrossCircled } from "react-icons/rx";
import { TProduct } from "../../types";

const ProductModal = ({ product, setProduct }) => {
  //   const [imgMessage, setImgMessage] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      brand: product.brand,
      stockQuantity: product.stockQuantity,
      rating: product.rating,
    },
  });

  const onSubmit = async (data: any) => {
    // if (bannerImgURLs?.length <= 0) {
    //   setImgMessage(true);
    // } else {
    //   setImgMessage(false);
    // }

    console.log(data);
    const details = {
      name: data.name,
      price: data.price,
    };

    Object.keys(product).length <= 0
      ? addProduct(details)
      : editProduct(details);
  };
  const addProduct = (details) => {};

  const editProduct = (details) => {};

  return (
    <div>
      <input type="checkbox" id="product-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box dark:bg-secondary max-w-5xl !important">
          <h3 className="font-bold text-lg text-black dark:text-white text-left">{`${
            Object.keys(product).length <= 0 ? "Add" : "Edit"
          } Banner`}</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-12 gap-2"
          >
            <div className="form-control w-full col-span-12 sm:col-span-12">
              <label className="label">
                <span className="label-text text-black dark:text-[#E2E2E2] font-semibold">
                  Name *
                </span>
              </label>
              <input
                placeholder={product?.name || `Name of the Banner`}
                defaultValue={product?.name && product?.name}
                type="text"
                className="input input-bordered bg-[#F6F6F6] dark:bg-[#2E2D2D] text-black dark:text-white border-0 rounded-none focus:outline-none"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                // onChange={(e) => setBannerName(e.target.value)}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-600 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full col-span-12 sm:col-span-12">
              <label className="label">
                <span className="label-text text-black dark:text-[#E2E2E2] font-semibold">
                  Redirect Link *
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered bg-[#F6F6F6] dark:bg-[#2E2D2D] text-black dark:text-white border-0 rounded-none focus:outline-none"
                // placeholder={product?.redirect_link || `Redirect Link`}
                // defaultValue={product?.redirect_link && product?.redirect_link}
                // {...register("redirect_link", {
                //   required: {
                //     value: true,
                //     message: "Redirect Link is required",
                //   },
                // })}
              />
              <label className="label">
                {/* {errors.redirect_link?.type === "required" && (
                  <span className="label-text-alt text-red-600 text-sm">
                    {errors.redirect_link.message}
                  </span>
                )} */}
              </label>
            </div>
            <div className="form-control w-full col-span-12 sm:col-span-6">
              <label className="label">
                <span className="label-text text-black dark:text-[#E2E2E2] font-semibold">
                  Start Date *
                </span>
              </label>
              <input
                type="date"
                className="input input-bordered bg-[#F6F6F6] dark:bg-[#2E2D2D] text-black dark:text-white border-0 rounded-none focus:outline-none"
                // {...register("start_date", {
                //   required: {
                //     value: true,
                //     message: "Start Date is required",
                //   },
                // })}
              />
              <label className="label">
                {/* {errors.start_date?.type === "required" && (
                  <span className="label-text-alt text-red-600 text-sm">
                    {errors.start_date.message}
                  </span>
                )} */}
              </label>
            </div>
            <div className="form-control w-full col-span-12 sm:col-span-6">
              <label className="label">
                <span className="label-text text-black dark:text-[#E2E2E2] font-semibold">
                  End date *
                </span>
              </label>
              <input
                type="date"
                className="input input-bordered bg-[#F6F6F6] dark:bg-[#2E2D2D] text-black dark:text-white border-0 rounded-none focus:outline-none"
                // {...register("end_date", {
                //   required: {
                //     value: true,
                //     message: "End Date is required",
                //   },
                // })}
              />
              <label className="label">
                {/* {errors.end_date?.type === "required" && (
                  <span className="label-text-alt text-red-600 text-sm">
                    {errors.end_date.message}
                  </span>
                )} */}
              </label>
            </div>
            <div className="form-control col-span-12">
              <label className="cursor-pointer label justify-start gap-2">
                <input
                  type="checkbox"
                  //   defaultChecked={isActive ? true : false}
                  //   onClick={() => setIsActive(!isActive)}
                  className={`checkbox w-4 h-4 rounded-sm border  `}
                />
              </label>
            </div>
            <div className="form-control col-span-12">
              <label className="label">
                <span className="label-text dark:text-white font-semibold">
                  Upload banner Images *
                </span>
              </label>
              <div className="flex flex-wrap gap-3">
                <img
                  // key={index}
                  // src={bannerImgFile}
                  alt=" "
                  className="w-[100px] h-[75px] rounded-[10px] object-cover"
                />
              </div>
              {/* {imgMessage && (
                <span className="label-text-alt text-red-600 text-sm">
                  Select minimum 1 Image
                </span>
              )} */}
            </div>

            <input
              type="submit"
              value="Submit"
              className="btn btn-md btn-outline w-full bg-black dark:bg-white text-white dark:text-black col-span-6"
            />
            <label
              onClick={() => setProduct(null)}
              htmlFor="product-modal"
              className="btn btn-md col-span-6"
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
