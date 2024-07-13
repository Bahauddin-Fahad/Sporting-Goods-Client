import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

interface QuantitySelectorProps {
  quantity: number;
  increment: () => void;
  decrement: () => void;
  inStock: number;
}

const QuantitySelector = ({
  quantity,
  increment,
  decrement,
  inStock,
}: QuantitySelectorProps) => {
  return (
    <div>
      <div
        className="py-2 px-3 border border-accent rounded-lg flex justify-evenly items-center gap-x-4 h-[30px] w-[100px] xs:h-[50px] xs:w-[177px]"
        data-hs-input-number=""
      >
        <button
          type="button"
          onClick={decrement}
          disabled={quantity <= 0}
          data-hs-input-number-decrement=""
        >
          <CiCircleMinus className="bg-white text-black text-2xl rounded-full" />
        </button>
        <p className="text-center text-2xl">{quantity}</p>
        <button
          type="button"
          onClick={increment}
          disabled={inStock <= 0}
          data-hs-input-number-increment=""
        >
          <CiCirclePlus className="bg-white text-black text-2xl rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
