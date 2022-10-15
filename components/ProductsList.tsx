import { StoreApiResponse } from '../apis/getProducts';
import { Product } from './Product';
import { ProductsLayout } from './ProductsLayout';

interface ProductsListProps {
  products: StoreApiResponse;
}
export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <ProductsLayout>
      {products.map((product) => (
        <Product
          key={product.id}
          href={`/${product.id}`}
          name={product.title}
          thumbnailUrl={product.image}
          price={product.price.toString()}
          variants={`${product.rating.rate} (${product.rating.count})`}
        />
      ))}
    </ProductsLayout>
  );
};
