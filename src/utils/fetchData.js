import { data, maxPage } from "@/utils/test";
export const fetchData = (page = 1) => {
  const pageSize = process.env.PAGE_SIZE || 20;
  if (page === maxPage) {
    return data.products.slice((page - 1) * pageSize);
  } else if (page > maxPage) {
    throw new Error("Goes out of the scope");
  }
  return data.products.slice((page - 1) * pageSize, page * pageSize);
};
