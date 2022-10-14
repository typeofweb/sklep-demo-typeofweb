import Link from 'next/link';
import Image from 'next/future/image';
import { formatMoney } from '../apis/formatMoney';

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

        <div className="relative">
          <Image
            alt="Trainer"
            src={thumbnailUrl}
            sizes="100vw"
            width={300}
            height={300}
            className="h-96 w-full object-contain"
          />
        </div>

        <h5 className="mt-4 text-sm text-black/90">{name}</h5>

        <div className="mt-4 flex items-center justify-between font-bold">
          <p className="text-lg">{formatMoney(Number.parseInt(price) / 100)}</p>

          <p className="text-xs uppercase tracking-wide">{variants}</p>
        </div>
      </a>
    </Link>
  );
};
