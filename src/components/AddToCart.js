"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";

export default function AddToCart({
  product,
  showQty = true,
  increasePerClick = true,
}) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    let newQty = qty;
    if (increasePerClick) {
      const existItem = cartItems.find((x) => x.id === product.id);
      if (existItem) {
        newQty = existItem.qty + 1;
      }
    }
    dispatch(addToCart({ ...product, qty: newQty }));
  };

  return (
    <>
      {showQty && (
        <div className="mb-2 flex justify-between">
          <div>Qty</div>
          <div>
            {cartItems.find((x) => x.id === product.id)
              ? cartItems.find((x) => x.id === product.id).qty
              : 0}
          </div>
        </div>
      )}
      <div>
        <button className="primary-button w-full" onClick={addToCartHandler}>
          Add to cart
        </button>
      </div>
    </>
  );
}
