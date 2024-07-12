declare module "react-rating" {
  import * as React from "react";

  interface RatingProps {
    initialRating?: number;
    onChange?: (rate: number) => void;
    readonly?: boolean;
    emptySymbol?: React.ReactNode | string;
    fullSymbol?: React.ReactNode | string;
  }

  const Rating: React.FC<RatingProps>;

  export default Rating;
}
