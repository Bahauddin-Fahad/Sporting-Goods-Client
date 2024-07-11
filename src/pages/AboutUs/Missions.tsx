import {
  MdSportsCricket,
  MdSportsBasketball,
  MdSportsBaseball,
  MdSportsHockey,
  MdSports,
  MdSportsMma,
} from "react-icons/md";
const Missions = () => {
  return (
    <div className="space-y-5">
      <h4 className="text-4xl font-bold text-center">
        Our Mission <span className="text-accent">&</span> Vision
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grow-[2] w-full">
        <div className="h-[230px] border flex gap-y-3 flex-col justify-center items-center">
          <MdSportsCricket className={`text-5xl text-accent`} />
          <div>
            <p className="text-center font-bold">
              Provide High-Quality Products
            </p>
            <p className="text-center text-sm text-gray-300">
              To offer the best sports equipment
            </p>
          </div>
        </div>
        <div className="h-[230px] border flex gap-y-3 flex-col justify-center items-center">
          <MdSportsBasketball className="text-5xl text-accent" />
          <div>
            <p className="text-center font-bold">Enhance Athlete Performance</p>
            <p className="text-center text-sm text-gray-300">
              To support athletes of all levels
            </p>
          </div>
        </div>
        <div className="h-[230px] border flex gap-y-3 flex-col justify-center items-center">
          <MdSportsBaseball className="text-5xl text-accent" />
          <div>
            <p className="text-center font-bold">
              Promote Sports Participation
            </p>
            <p className="text-center text-sm text-gray-300">
              To encourage people of all ages to engage in sports
            </p>
          </div>
        </div>
        <div className="h-[230px] border flex gap-y-3 flex-col justify-center items-center">
          <MdSportsHockey className="text-5xl text-accent" />
          <div>
            <p className="text-center font-bold">
              Become a Leading Sports Retailer
            </p>
            <p className="text-center text-sm text-gray-300">
              To establish as a top sports equipment destination
            </p>
          </div>
        </div>
        <div className="h-[230px] border flex gap-y-3 flex-col justify-center items-center">
          <MdSportsMma className="text-5xl text-accent" />
          <div>
            <p className="text-center font-bold">Innovate Continuously</p>
            <p className="text-center text-sm text-gray-300">
              To stay ahead innovating the product range
            </p>
          </div>
        </div>
        <div className="h-[230px] border flex gap-y-3 flex-col justify-center items-center">
          <MdSports className="text-5xl text-accent" />
          <div>
            <p className="text-center font-bold">Foster a Sports Community</p>
            <p className="text-center text-sm text-gray-300">
              To build a strong community of sports enthusiasts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;
