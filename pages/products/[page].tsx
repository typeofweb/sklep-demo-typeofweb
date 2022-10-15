import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { getProductsForPage } from '../../apis/getProducts';
import { ProductsList } from '../../components/ProductsList';
import { ProductsPagination } from '../../components/ProductsPagination';
import { InferGetStaticPathsType } from '../../types';

export default function ProductsSSGPage({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!products) {
    return null;
  }

  return (
    <div className="pb-16 gap-10 flex flex-col">
      <ProductsList products={products} />
      <ProductsPagination />
    </div>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: Array.from({ length: 10 }, (_, idx) => ({
      params: {
        page: (idx + 1).toString(),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.page) {
    return {
      notFound: true,
      props: {},
    };
  }

  const products = await getProductsForPage(Number.parseInt(params.page));

  return {
    props: {
      products,
    },
  };
};
