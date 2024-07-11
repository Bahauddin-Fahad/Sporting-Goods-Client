import {
  MdSportsCricket,
  MdSportsBasketball,
  MdSportsBaseball,
  MdSportsHockey,
  MdSports,
  MdSportsMma,
} from "react-icons/md";
const Qualities = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grow-[2] w-full">
      <div className="h-[230px] border flex gap-y-3 flex-col justify-center items-center">
        <MdSportsCricket className={`text-5xl text-accent`} />
        <div>
          <p className="text-center font-bold">Wide Range of Equipment</p>
          <p className="text-center text-sm text-gray-300">
            More than 200 Equipments
          </p>
        </div>
      </div>
      <div className="h-[230px] border flex gap-y-3 flex-col justify-center items-center">
        <MdSportsBasketball className="text-5xl text-accent" />
        <div>
          <p className="text-center font-bold">High-Quality Products</p>
          <p className="text-center text-sm text-gray-300">
            Perfact for Professional Needs
          </p>
        </div>
      </div>
      <div className="h-[230px] border flex gap-y-3 flex-col justify-center items-center">
        <MdSportsBaseball className="text-5xl text-accent" />
        <div>
          <p className="text-center font-bold">Expertly Crafted Gear</p>
          <p className="text-center text-sm text-gray-300">
            Precision-engineered
          </p>
        </div>
      </div>
      <div className="h-[230px] border flex gap-y-3 flex-col justify-center items-center">
        <MdSportsHockey className="text-5xl text-accent" />
        <div>
          <p className="text-center font-bold">Essential Accessories</p>
          <p className="text-center text-sm text-gray-300">
            To support Athletic journey
          </p>
        </div>
      </div>
      <div className="h-[230px] border flex gap-y-3 flex-col justify-center items-center">
        <MdSportsMma className="text-5xl text-accent" />
        <div>
          <p className="text-center font-bold">For All Athletes</p>
          <p className="text-center text-sm text-gray-300">
            Suitable for everyone
          </p>
        </div>
      </div>
      <div className="h-[230px] border flex gap-y-3 flex-col justify-center items-center">
        <MdSports className="text-5xl text-accent" />
        <div>
          <p className="text-center font-bold">Commitment to Excellence</p>
          <p className="text-center text-sm text-gray-300">
            Offering only the best products
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qualities;
