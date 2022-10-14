import type { NextPage } from 'next';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div></div>
      <Footer />
    </div>
  );
};

export default Home;
