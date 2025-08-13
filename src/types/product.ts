import type { Category } from "./category";
import type { Review } from "./review";

export type ProductResponse = {
  _id: string;
  name: string;
  image: string;
  quantity: number;
  category: Category;
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  reviews: Review[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
