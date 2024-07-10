import Banner from "./Banner";
import Categories from "./Categories";
import HomeProducts from "./HomeProducts";

const Home = () => {
  return (
    <div className="space-y-24">
      <Banner />
      <HomeProducts />
      <Categories />
    </div>
  );
};

export default Home;
