import Banner from "./Banner";
import Categories from "./Categories";
import ContactUs from "./ContactUs";
import HomeProducts from "./HomeProducts";

const Home = () => {
  return (
    <div className="space-y-10 md:space-y-16 lg:space-y-24">
      <Banner />
      <HomeProducts />
      <Categories />
      <ContactUs />
    </div>
  );
};

export default Home;
