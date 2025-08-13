import type { ProductResponse } from "../types/product";

interface FavoriteStore {
  favorities: ProductResponse[];
  addFavorite: (product: ProductResponse) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (product: ProductResponse) => void;
}

// const useFavoriteStore = create<FavoriteStore>
