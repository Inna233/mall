"use client";

import Image from "next/image";
import Link from "next/link";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CartPage() {
  const dispatch = useDispatch();
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-left">Product</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Price</th>
                  <th className="p-5 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td>
                      <div className="flex items-center">
                        <Image
                          src={item.photos?.[0]}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="p-1"
                        ></Image>
                        {item.name}
                      </div>
                    </td>
                    <td className="p-5 text-right flex justify-end">
                      <button
                        onClick={() => {
                          item.qty <= 1
                            ? removeFromCartHandler(item.id)
                            : addToCartHandler(item, Number(item.qty - 1));
                        }}
                      >
                        <svg
                          t="1701627442823"
                          class="icon"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="2947"
                          width="12"
                          height="12"
                        >
                          <path
                            d="M507.904 52.224q95.232 0 179.2 36.352t145.92 98.304 98.304 145.408 36.352 178.688-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-178.688-36.352-145.408-98.304-98.304-145.92-36.352-179.2 36.352-178.688 98.304-145.408 145.408-98.304 178.688-36.352zM736.256 573.44q30.72 0 55.296-15.872t24.576-47.616q0-30.72-24.576-45.568t-55.296-14.848l-452.608 0q-30.72 0-56.32 14.848t-25.6 45.568q0 31.744 25.6 47.616t56.32 15.872l452.608 0z"
                            fill="#2c2c2c"
                            p-id="2948"
                          ></path>
                        </svg>
                      </button>
                      &nbsp;{item.qty}&nbsp;
                      <button
                        onClick={() =>
                          addToCartHandler(item, Number(item.qty + 1))
                        }
                      >
                        <svg
                          t="1701627524217"
                          class="icon"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="904"
                          width="12"
                          height="12"
                        >
                          <path
                            d="M511.3 64.2c-247.1 0-447.4 200.3-447.4 447.4S264.2 959 511.3 959s447.4-200.3 447.4-447.4S758.4 64.2 511.3 64.2z m244.1 488.1H552v203.4c0 22.5-18.2 40.7-40.7 40.7-22.5 0-40.7-18.2-40.7-40.7V552.3H267.3c-22.5 0-40.7-18.2-40.7-40.7 0-22.5 18.2-40.7 40.7-40.7h203.4V267.6c0-22.5 18.2-40.7 40.7-40.7 22.5 0 40.7 18.2 40.7 40.7V471h203.4c22.5 0 40.7 18.2 40.7 40.7-0.1 22.4-18.4 40.6-40.8 40.6z"
                            fill="#2c2c2c"
                            p-id="905"
                          ></path>
                        </svg>
                      </button>
                    </td>
                    <td className="p-5 text-right">${item.price}</td>
                    <td className="p-5 text-center">
                      <button
                        className="default-button"
                        onClick={() => removeFromCartHandler(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="card p-5">
              <ul>
                <li>
                  <div className="pb-3 text-xl">
                    total amount(
                    {cartItems.reduce((a, c) => a + c.qty, 0)}): ${itemsPrice}
                  </div>
                </li>
                <li>
                  <Link href="/placeorder" className="primary-button w-full">
                    Proceed to checkout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
