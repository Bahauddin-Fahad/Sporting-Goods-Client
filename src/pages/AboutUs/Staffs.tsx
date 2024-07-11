import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import staffs from "../../../public/staffs.json";

const Staffs = () => {
  const settings = {
    fade: true,
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    swipeToSlide: false,
    arrows: false,
    swipe: false,
  };

  return (
    <div className="space-y-5">
      <h4 className="text-4xl font-bold text-center ">Our Staffs</h4>
      <div className={`glass pt-5`}>
        <div className={`mx-auto`}>
          <Slider {...settings} className="mx-auto">
            {staffs.map((staff, i) => (
              <div className={`px-3 slide flex-col lg:flex-row`} key={i}>
                <img
                  className="block object-contain lg:h-[80vh] mx-auto lg:mx-0"
                  src={staff.image}
                  alt=""
                />
                <div className="space-y-5 max-w-sm">
                  <div className="h-[4px] w-[70px] bg-accent mx-0 -mb-3 rounded-full" />
                  <h6
                    className={`openSans uppercase tracking-[5px] text-sm text-white`}
                  >
                    Los Blancos Staffs
                  </h6>

                  <h5 className="font-semibold text-2xl">{staff.name}</h5>
                  <h4 className={`roboto font-medium text-base`}>
                    Profession
                    <br />
                    <span className="font-bold text-lg">
                      {staff.profession}
                    </span>
                  </h4>
                  <p className="text-sm pr-2 overflow-auto">
                    {staff.details.slice(0, 200)}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Staffs;
