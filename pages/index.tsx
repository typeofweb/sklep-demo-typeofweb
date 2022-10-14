import type { NextPage } from 'next';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main';
import { Product } from '../components/Product';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Main>
        <Product
          href="/"
          name="Limited Edition Sports Trainer"
          thumbnailUrl="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          price="$189.99"
          variants="6 Colors"
        />
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
