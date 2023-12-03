"use client";
import Link from "next/link";
import Image from "next/image";
import AddToCart from "./AddToCart";

export default function ProductItem({ product }) {
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
        <AddToCart
          showQty={false}
          product={product}
          increasePerClick={true}
          redirect={false}
        />
      </div>
    </div>
  );
}
