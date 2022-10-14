import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { getProductsForPage } from '../../apis/getProducts';

const productsForPageQuery = (page: number) => [['products', page], () => getProductsForPage(page)] as const;
export const useProductsForPage = (page: number) => {
  const result = useQuery(...productsForPageQuery(page), { suspense: true });

  return result;
};
export const usePrefetchProductsForPage = () => {
  const queryClient = useQueryClient();
  return useCallback((page: number) => queryClient.prefetchQuery(...productsForPageQuery(page)), [queryClient]);
};
