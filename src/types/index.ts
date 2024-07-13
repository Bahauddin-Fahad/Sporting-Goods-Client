/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldValues } from "react-hook-form";

export type TCategory = {
  name: string;
  image: string;
};
export type TBanner = {
  name: string;
  bannerImage: string;
};

export type TProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  stockQuantity: number;
  rating: number;
};
export type RatingProps = {
  initialRating?: number;
  onChange?: (rate: number) => void;
  readonly?: boolean;
  emptySymbol?: React.ReactNode | string;
  fullSymbol?: React.ReactNode | string;
};

export type RatingInputProps = {
  name: string;
  control?: Control<FieldValues>;
  defaultValue?: number;
  readOnly?: boolean;
};
