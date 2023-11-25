"use client";

import { useContext } from "react";
import { CartSystem } from "../../app/layout";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { state, dispatch } = useContext(CartSystem);

  const total = state.cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div>
      {state.cart.length === 0 ? (
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
                </tr>
              </thead>
              <tbody>
                {state.cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td>
                      <div className="flex items-center">
                        {item.photos && (
                          <Image
                            src={item.photos[0]}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="p-1"
                          ></Image>
                        )}
                        {item.name}
                      </div>
                    </td>
                    <td className="p-5 text-right">{item.quantity}</td>
                    <td className="p-5 text-right">${item.price}</td>
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
                    {state.cart.reduce((a, c) => a + c.quantity, 0)}): ${total}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
