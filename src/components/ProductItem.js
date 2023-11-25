"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { CartSystem } from "../app/layout";

export default function ProductItem({ product }) {
  const { state, dispatch } = useContext(CartSystem);
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="card">
      <div>
        {product.photos && (
          <Image
            src={product.photos[0]}
            width={400}
            height={400}
            alt={product.name}
            className="rounded shadow object-cover h-96 w-full"
          />
        )}
      </div>
      <div className="flex flex-col items-center justify-center p-5">
        <span>
          <h2 className="text-lg">{product.name}</h2>
        </span>

        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
}
