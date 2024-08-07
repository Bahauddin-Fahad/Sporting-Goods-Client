import { useEffect } from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerJSON from "../../assets/jsons/banners.json";
import { TBanner } from "../../types";

const Banner = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="rounded-[20px]">
      <div className="slider-container">
        <Slider {...settings}>
          {bannerJSON &&
            bannerJSON?.map((banner: TBanner, index: number) => (
              <div key={index}>
                <img
                  src={banner?.bannerImage}
                  alt="Banner"
                  className="mx-auto cursor-pointer w-full rounded-3xl"
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
