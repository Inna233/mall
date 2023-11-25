"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useReducer } from "react";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const CartSystem = createContext();

const initailState = {
  cart: [],
};

export default function RootLayout({ children }) {
  const Reducers = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const { id, name, price, photos } = action.payload;
        const cartItem = state.cart.find((item) => item.id === id);
        if (cartItem) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { id, name, price, photos, quantity: 1 }],
          };
        }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(Reducers, initailState);

  return (
    <html lang="en">
      <body className={inter.className}>
        <CartSystem.Provider value={{ state, dispatch }}>
          <Header />
          <div className="mt-12">{children}</div>
        </CartSystem.Provider>
      </body>
    </html>
  );
}
