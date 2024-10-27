import { create } from "zustand";

interface ICartProp {
    name: string;
    description: string;
    sizes: string[];
    price: number,
    colors: string[];
    images: string[]
    features: string[]
    totalPrice?: number;
    totalNumbers?: number
}


interface IProp {
  carts: ICartProp[];
}

type TActions = {
  addToCart: (carts: []) => void;
  setUpdateCartNumber?: (index: number, val: number) => void;
  resetCart: () => void;
};

const initialState: IProp = {
  carts: [],
};

export const useCartStore = create<IProp & TActions>((set) => ({
  ...initialState,

  addToCart(data) {
    set({ carts: data });
  },

//   setUpdateCartNumber፡ (index, val) =>
//     set((state) => {
//         const cartToIncrease = state.carts[index];

//         return
//              {
//               cartToIncrease.totalNumbers = val;
//               cartToIncrease.totalPrice = cartToIncrease.price * val;
//             }
//     }),

  resetCart() {
    set({ carts: [] });
  },
}));
