/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import ProductCard from "../../components/product/ProductCard";
import { useGetProductsQuery } from "../../redux/features/product/productApi";
import { TCategory, TProduct } from "../../types";
import Loading from "../Loading/Loading";

import { IoSearchSharp } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
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
  const [checkedState, setCheckedState] = useState(
    categoryJson?.reduce(
      (acc: { [x: string]: boolean }, category: { name: string | number }) => {
        acc[category?.name] = false;
        return acc;
      },
      {} as Record<string, boolean>
    )
  );
  // console.log(categories);
  console.log(checkedState);

  const [queryObj, setQueryObj] = useState({
    sort: selectedSort,
    searchTerm: searchTerm,
    categories: checkedState,
    priceRange: {
      minPrice: minValue,
      maxPrice: maxValue,
    },
  });
  const {
    data: productData,
    isLoading,
    refetch,
  } = useGetProductsQuery(queryObj);
  const products: TProduct[] = productData?.data;

  const handleSelectChange = (event: FormEvent) => {
    // Update the state with the selected value
    setSelectedSort((event.target as HTMLFormElement).value);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    refetch();
  };

  const handleSearchProduct = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsResetButtonEnabled(true);
    (event.target as HTMLFormElement).reset();
  };
  const handleSliderChange = (values: number[]) => {
    setIsResetButtonEnabled(true);
    setMinValue(values[0]);
    setMaxValue(values[1]);
    refetch();
  };
  const handleCheckboxChange = (categoryName: string) => {
    setCheckedState((prevState: { [x: string]: any }) => {
      const newState = {
        ...prevState,
        [categoryName]: !prevState?.[categoryName],
      };
      setIsResetButtonEnabled(
        Object.values(newState).some((checked) => checked)
      );
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
  };

  useEffect(() => {
    // Update queryObj whenever selectedSort changes
    setQueryObj({
      sort: selectedSort,
      searchTerm: searchTerm,
      categories: checkedState,
      priceRange: {
        minPrice: minValue,
        maxPrice: maxValue,
      },
    });
  }, [selectedSort, searchTerm, checkedState, minValue, maxValue, refetch]);

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
        <div className="flex justify-center items-center gap-x-3 lg:-mt-16 -mt-10 text-white "></div>
      </div>
      <form className="w-full max-w-7xl" onSubmit={handleSearchProduct}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <IoSearchSharp />
          </div>
          <input
            type="text"
            id="default-search"
            onBlur={handleInputChange}
            className="block w-full p-4 ps-10 text-sm border-2 border-accent glass rounded-lg text-white"
            placeholder="Search Products..."
            required
          />
          <button
            type="submit"
            className="text-black font-bold absolute end-2.5 bottom-2.5 bg-accent hover:bg-[] rounded-lg text-sm px-4 py-2"
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
            className="m-1 flex gap-3 items-center"
          >
            <BiCategoryAlt className="text-2xl" />
            <h1 className="text-xl xl:text-2xl font-semibold">
              Filter by Categories
            </h1>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-secondary rounded-box z-[1] w-52 p-2 shadow"
          >
            {categoryJson?.map((singleCategory: TCategory) => (
              <div key={singleCategory?.name}>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={checkedState?.[singleCategory?.name]}
                    onChange={() => handleCheckboxChange(singleCategory?.name)}
                  />
                  <span
                    className={`w-4 h-4 inline-block rounded-full border-2 ${
                      checkedState?.[singleCategory?.name]
                        ? "border-white bg-accent"
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
            onChange={handleSliderChange}
          />
          <p className="xl:text-md font-medium">
            Price Range: ${minValue} - ${maxValue}
          </p>
        </div>

        <div className="text-xl xl:text-2xl font-semibold text-white">
          <select
            className="bg-transparent"
            value={selectedSort}
            onChange={handleSelectChange}
          >
            <option value="all" className="bg-secondary text-lg">
              Sort By Price
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
            className={`px-4 py-2 rounded ${
              isResetButtonEnabled
                ? "bg-accent text-black cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Reset Filters
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {products?.map((product: TProduct, index: number) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {/* <div className="space-x-3 mt-4">
        {totalPagesArray?.length > 1 &&
          totalPagesArray.map((page: number, index: Key | null | undefined) => (
            <button
              key={index}
              onClick={() => handleCurrentPage(page)}
              className={`btn btn-sm ${
                page + 1 === currentPage && "btn-accent"
              }`}
            >
              {page + 1}
            </button>
          ))}
      </div> */}
    </div>
  );
};

export default AllProducts;
