import { Suspense } from 'react';
import { ProductsCsrList } from './ProductsCsrList';
import { ProductsCsrPagination, useCsrPagination } from './ProductsCsrPagination';

export const ProductsCsr = () => {
  const { page } = useCsrPagination();

  return (
    <div className="pb-16 gap-10 flex flex-col">
      <Suspense fallback="Ładowanie…">
        <ProductsCsrList page={page} />
      </Suspense>
      <ProductsCsrPagination />
    </div>
  );
};
