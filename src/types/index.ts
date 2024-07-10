export type TCategory = {
  name: string;
  image: string;
};
export type TBanner = {
  name: string;
  bannerImage: string;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  image: string;
  category: TCategory;
  brand: string;
  stockQuantity: number;
  rating: number;
};