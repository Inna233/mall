"use client";
import ProductItem from "@/components/ProductItem";
import { useState, useEffect, useRef } from "react";
import { fetchData } from "@/utils/fetchData";

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let page = 1;

  const operateData = () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = fetchData(page);
      setItems((preItems) => [...preItems, ...data]);
      page++;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          operateData();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {items &&
        items.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div ref={observerTarget}></div>
    </div>
  );
}
