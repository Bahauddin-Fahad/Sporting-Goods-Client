import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TProductSlice = {
  id: string;
  name: string;
  price: number;
  quantity?: number;
  image: string;
  inStock: number;
};

type TInitialState = {
  product: TProductSlice[];
  quantities: Record<string, number>;
  subtotal: number;
};

const initialState: TInitialState = {
  product: [],
  quantities: {},
  subtotal: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProductSlice>) => {
      state.product.push({ ...action.payload });
      state.quantities = state.product.reduce((acc, product) => {
        acc[product.id] = product.quantity || 1;
        return acc;
      }, {} as Record<string, number>);
      state.subtotal = state.product.reduce((acc, product) => {
        return acc + product.price * (product.quantity || 1);
      }, 0);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payload
      );
      delete state.quantities[action.payload];
      state.subtotal = state.product.reduce((acc, product) => {
        return acc + product.price * (product.quantity || 1);
      }, 0);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      state.quantities[id] = quantity;
      const product = state.product.find((p) => p.id === id);
      if (product) {
        product.quantity = quantity;
        state.subtotal = state.product.reduce((acc, product) => {
          return acc + product.price * (product.quantity || 1);
        }, 0);
      }
    },
  },
});

export const { addProduct, removeProduct, updateQuantity } =
  productSlice.actions;

export default productSlice.reducer;
