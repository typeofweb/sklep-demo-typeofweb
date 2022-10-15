import { ProductsList } from '../ProductsList';
import { useProductsForPage } from './useProducts';

interface ProductsCsrProps {
  page: number;
}

export const ProductsCsrList = ({ page }: ProductsCsrProps) => {
  const result = useProductsForPage(page);
  return <ProductsList products={result.data!} />;
};
