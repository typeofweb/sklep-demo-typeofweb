interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: Rating;
  image: string;
  longDescription: string;
}

interface Rating {
  rate: number;
  count: number;
}

export type StoreApiResponse = Product[];

export const getProducts = async () => {
  // await new Promise((_, reject) => setTimeout(reject, 50));
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
  const data = await res.json();
  return data as StoreApiResponse;
};

export const PRODUCTS_PER_PAGE = 24;
export const getProductsForPage = async (page: number) => {
  // await new Promise((_, reject) => setTimeout(reject, 50));
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${PRODUCTS_PER_PAGE}&offset=${PRODUCTS_PER_PAGE * (page - 1)}`,
  );
  const data = await res.json();
  return data as StoreApiResponse;
};

export const countProducts = async (count = 0): Promise<number> => {
  const PER_FETCH = 501;

  const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=${PER_FETCH}&offset=${count}`);
  const data = (await res.json()) as StoreApiResponse;

  const newCount = count + data.length;

  if (data.length === PER_FETCH) {
    return countProducts(newCount);
  } else {
    return newCount;
  }
};
