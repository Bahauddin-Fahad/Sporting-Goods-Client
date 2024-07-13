/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "../../components/product/ProductCard";
import { useGetProductsQuery } from "../../redux/features/product/productApi";
import { TCategory, TProduct } from "../../types";
import Loading from "../Loading/Loading";
import { BiSolidCategory } from "react-icons/bi";
import { IoIosPricetags } from "react-icons/io";
import "../../components/layout/MainLayout.css";
import ReactSlider from "react-slider";
import categoryJson from "../../assets/jsons/categories.json";

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(300);
  const [selectedSort, setSelectedSort] = useState("all");
  const [isResetButtonEnabled, setIsResetButtonEnabled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 9;
  const [checkedState, setCheckedState] = useState(
    categoryJson?.reduce(
      (acc: { [x: string]: boolean }, category: { name: string | number }) => {
        acc[category?.name] = false;
        return acc;
      },
      {} as Record<string, boolean>
    )
  );

  const queryObj = {
    sort: selectedSort,
    searchTerm: searchTerm,
    categories: checkedState,
    priceRange: {
      minPrice: minValue,
      maxPrice: maxValue,
    },
    page: currentPage,
    limit: dataPerPage,
  };

  const {
    data: productData,
    isLoading,
    refetch,
  } = useGetProductsQuery(queryObj);

  const products: TProduct[] = productData?.data;
  const meta = productData?.meta;
  const totalPagesArray = [...Array(meta?.totalPage).keys()];

  const handlePriceSort = (event: FormEvent) => {
    setSelectedSort((event.target as HTMLFormElement).value);
    setCurrentPage(1);

    refetch();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
    refetch();
  };

  const handleSearchProduct = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsResetButtonEnabled(true);
    setCurrentPage(1);
    (event.target as HTMLFormElement).reset();
  };

  const handlePriceRange = (values: number[]) => {
    setIsResetButtonEnabled(true);
    setMinValue(values[0]);
    setMaxValue(values[1]);
    setCurrentPage(1);
    refetch();
  };

  const handleCategoryFilter = (categoryName: string) => {
    setCheckedState((prevState: { [x: string]: any }) => {
      const newState = {
        ...prevState,
        [categoryName]: !prevState?.[categoryName],
      };
      setIsResetButtonEnabled(
        Object.values(newState).some((checked) => checked)
      );
      setCurrentPage(1);
      refetch();
      return newState;
    });
  };

  const handleReset = () => {
    const resetState = Object.keys(checkedState).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {} as Record<string, boolean>);
    setCheckedState(resetState);
    setIsResetButtonEnabled(false);
    setMinValue(0);
    setMaxValue(300);
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handleCurrentPage = async (page: number) => {
    await setCurrentPage(page + 1);
    await refetch();
  };

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, [products]);

  if (isLoading) {
    return <Loading />;
  }
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
      </div>
      <div className="space-y-10">
        <form className="w-full max-w-7xl" onSubmit={handleSearchProduct}>
          <label htmlFor="default-search" />
          <div className="relative h-[70px]">
            <input
              type="text"
              id="default-search"
              onBlur={handleInputChange}
              className="w-full h-full ps-10 border-2 border-accent glass rounded-lg text-white text-md lg:text-xl"
              placeholder="Search Products..."
              required
            />
            <button
              type="submit"
              className="text-black font-bold absolute end-2.5 bottom-[15px] bg-accent hover:bg-[] rounded-lg px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
        <div className="text-white flex items-center justify-between w-full">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="flex gap-3 items-center bg-secondary p-3 rounded"
            >
              <BiSolidCategory className="text-2xl text-accent" />
              <h1 className="text-xl xl:text-2xl font-semibold">
                Filter by Categories
              </h1>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-secondary rounded-box z-[1] w-full p-2 shadow"
            >
              {categoryJson?.map((singleCategory: TCategory) => (
                <div key={singleCategory?.name}>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={checkedState?.[singleCategory?.name]}
                      onChange={() =>
                        handleCategoryFilter(singleCategory?.name)
                      }
                    />
                    <span
                      className={`w-4 h-4 inline-block rounded-full border-2 ${
                        checkedState?.[singleCategory?.name]
                          ? "border-black bg-accent"
                          : "border-gray-300"
                      } flex items-center justify-center cursor-pointer`}
                    ></span>
                    <span className="select-none ml-3 md:text-sm xl:text-lg">
                      {singleCategory?.name}
                    </span>
                  </label>
                </div>
              ))}
            </ul>
          </div>
          <div className="space-y-4 text-white">
            <div className="flex gap-3 items-center">
              <IoIosPricetags className="text-lg" />
              <h1 className="text-lg font-semibold">Price</h1>
            </div>
            <ReactSlider
              className="slider"
              min={0}
              max={300}
              step={1} // adjust step value for finer control
              value={[minValue, maxValue]}
              onChange={handlePriceRange}
            />
            <p className="xl:text-md font-medium">
              Price Range: ${minValue} - ${maxValue}
            </p>
          </div>

          <div className="text-xl xl:text-2xl font-semibold text-white">
            <select
              className="bg-secondary p-3 rounded cursor-pointer"
              value={selectedSort}
              onChange={handlePriceSort}
            >
              <option
                disabled
                defaultValue={""}
                className="bg-secondary text-lg"
              >
                Select One
              </option>
              <option value="ascending" className="bg-secondary text-lg">
                Low to High
              </option>
              <option value="descending" className="bg-secondary text-lg">
                High to Low
              </option>
            </select>
          </div>
          <div className="">
            <button
              onClick={handleReset}
              disabled={!isResetButtonEnabled}
              className={`text-lg p-3 rounded font-semibold text-black ${
                isResetButtonEnabled
                  ? "bg-accent text-black cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {products?.map((product: TProduct, index: number) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="space-x-3 mt-4 flex justify-center">
        {totalPagesArray?.length > 1 &&
          totalPagesArray.map((page, index) => (
            <button
              key={index}
              onClick={() => handleCurrentPage(page)}
              className={`btn btn-md font-bold text-lg ${
                page + 1 === currentPage && "btn-accent"
              }`}
            >
              {page + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
