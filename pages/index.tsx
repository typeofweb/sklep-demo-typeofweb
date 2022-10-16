import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { ProductsLayout } from '../components/ProductsLayout';
import { Product } from '../components/Product';

const Home: NextPage = () => {
  return (
    <ProductsLayout>
      <Product
        href="/"
        name="Limited Edition Sports Trainer"
        thumbnailUrl="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        price="18999"
        variants="6 Colors"
      />
    </ProductsLayout>
  );
};

export default Home;
