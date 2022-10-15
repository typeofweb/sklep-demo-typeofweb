import Link from 'next/link';
import { useRouter } from 'next/router';

export const ProductsPagination = () => {
  const router = useRouter();
  const page = Number.parseInt(router.query.page?.toString() || '1') || 1;
  const prevPage = page - 1;
  const nextPage = page + 1;

  return (
    <div className="inline-flex justify-center items-center gap-1">
      <Link href={`/products/${prevPage}`} scroll={true}>
        <a className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100">
          <span className="sr-only">Prev Page</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </Link>

      <div>
        <span className="sr-only">Page</span> <span className="inline-flex text-sm leading-none">{page}</span>
      </div>

      <Link href={`/products/${nextPage}`} scroll={true}>
        <a className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100">
          <span className="sr-only">Next Page</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
};
