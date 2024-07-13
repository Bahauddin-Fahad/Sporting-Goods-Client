import { FaSort } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { IoIosPricetags } from "react-icons/io";
import ReactSlider from "react-slider";
import { TCategory } from "../../types";
import { ChangeEvent, FormEvent } from "react";

const ProductFilters = ({
  setSelectedSort,
  setSearchTerm,
  setIsResetButtonEnabled,
  setMinValue,
  setMaxValue,
  checkedState,
  setCheckedState,
  categories,
  minValue,
  maxValue,
  isResetButtonEnabled,
  selectedSort,
}) => {
  const handleSelectChange = (event: FormEvent) => {
    setSelectedSort((event.target as HTMLFormElement).value);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
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
    setMaxValue(1200);
    setSearchTerm("");
  };
  return (
    <div className="text-white flex items-center justify-between w-full">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="m-1 flex gap-3 items-center">
          <BiCategoryAlt className="text-2xl" />
          <h1 className="text-xl xl:text-2xl font-semibold">
            Filter by Categories
          </h1>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-secondary rounded-box z-[1] w-52 p-2 shadow"
        >
          {categories?.map((singleCategory: TCategory) => (
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
      <form onSubmit={handleSearchProduct} className="">
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
            className="block w-full p-4 ps-10 text-sm border-2 border-accent glass rounded-lg "
            placeholder="Search Products..."
            required
          />
          <button
            type="submit"
            className="text-black absolute end-2.5 bottom-2.5 bg-accent hover:bg-[] font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mt-7 space-y-7">
        <div className="flex gap-3 items-center">
          <IoIosPricetags className="text-3xl" />
          <h1 className="md:text-2xl xl:text-3xl font-semibold">Price</h1>
        </div>
        <ReactSlider
          className="slider"
          min={0}
          max={1200}
          step={1} // adjust step value for finer control
          value={[minValue, maxValue]}
          onChange={handleSliderChange}
        />
        <p className="xl:text-xl font-medium">
          Price Range: ${minValue} - ${maxValue}
        </p>
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
      <div className="text-xl font-semibold text-black">
        <FaSort />
        <select
          className="select select-bordered"
          value={selectedSort}
          onChange={handleSelectChange}
        >
          <option value="all">Sort By Price</option>
          <option value="ascending">Low to High</option>
          <option value="descending">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;
