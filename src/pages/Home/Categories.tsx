import { useNavigate } from "react-router-dom";

import { TCategory } from "../../types";
import { BiSolidCategory } from "react-icons/bi";
import categoryJson from "../../assets/jsons/categories.json";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-5 lg:space-y-10">
      <div className="flex gap-2 text-3xl lg:text-5xl text-white">
        <BiSolidCategory data-aos="slide-right" className="text-accent" />
        <h1 data-aos="slide-left" className="font-semibold">
          Categories
        </h1>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {categoryJson?.map((category: TCategory, index: number) => (
          <div
            key={index}
            onClick={() => navigate(`/products/cat/${category.name}`)}
            className="h-[200px] w-[250px] mx-auto rounded-3xl flex flex-col items-center gap-3 p-5 border border-black shadow-md shadow-black bg-white cursor-pointer"
          >
            <img
              src={category.image}
              alt=""
              data-aos="zoom-in"
              className="h-[120px] w-[120px] hover:scale-110 duration-300"
            />
            <p className="text-2xl font-semibold">{category?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
