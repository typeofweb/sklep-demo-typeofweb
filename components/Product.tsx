import Link from 'next/link';

interface ProductProps {
  href: string;
  name: string;
  price: string;
  variants: string;
  thumbnailUrl: string;
}

export const Product = ({ href, name, price, thumbnailUrl, variants }: ProductProps) => {
  return (
    <Link href={href}>
      <a className="block">
        <div className="flex justify-center">
          <strong className="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white">New</strong>
        </div>

        <img alt="Trainer" src={thumbnailUrl} className="-mt-3 h-96 w-full object-cover" />

        <h5 className="mt-4 text-sm text-black/90">{name}</h5>

        <div className="mt-4 flex items-center justify-between font-bold">
          <p className="text-lg">{price}</p>

          <p className="text-xs uppercase tracking-wide">{variants}</p>
        </div>
      </a>
    </Link>
  );
};
