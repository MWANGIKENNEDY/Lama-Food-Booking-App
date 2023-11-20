import { CartType, ActionTypes } from "@/types/types";
import { create } from "zustand";

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

//pass inside our state and actions
//here we are first destructuring our initial state

export const useCartStore = create<CartType & ActionTypes>((set, get) => ({
  products: INITIAL_STATE.products,
  totalItems: INITIAL_STATE.totalItems,
  totalPrice: INITIAL_STATE.totalPrice,
  //we are taking an item of type CartItemType
  //on clicking add to cart button
  addToCart(item) {
    set((state) => ({
      //previous product plus one more item
      products: [...state.products, item],
      totalItems: state.totalItems + item.quantity,
      totalPrice: state.totalPrice + item.price,
    }));
  },
  removeFromCart(item) {
    set((state) => ({
      products: state.products.filter((product) => product.id !== item.id),
      totalItems: state.totalItems - item.quantity,
      totalPrice: state.totalPrice - item.price,
    }));
  },
}));
