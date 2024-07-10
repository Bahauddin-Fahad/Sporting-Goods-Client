import { useGetCategoriesQuery } from "../../redux/features/category/categoryApi";
import { TCategory } from "../../types";

const Categories = () => {
  const { data } = useGetCategoriesQuery(undefined);
  const categories = data?.data;

  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-white text-5xl font-semibold">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {categories?.map((category: TCategory) => (
          <div className="h-[200px] w-[200px] mx-auto rounded-3xl flex flex-col items-center gap-3 p-5 border border-black shadow-md shadow-black bg-white">
            <img src={category.image} alt="" className="h-[120px] w-[120px]" />
            <p className="text-2xl font-semibold">{category?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
