import { ActiveLink } from '../ActiveLink';

const links = [
  {
    href: '/',
    label: 'Shop',
  },
  {
    href: '/products/1',
    label: 'SSG',
  },
  {
    href: '/products-csr',
    label: 'CSR',
  },
  {
    href: '/about',
    label: 'About',
  },
];
export const LinksNavigation = () => {
  return (
    <nav>
      <ul className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500">
        {links.map((link) => (
          <LinkNavigationItem key={link.href} href={link.href} label={link.label} />
        ))}
      </ul>
    </nav>
  );
};

interface LinkNavigationItemProps {
  href: string;
  label: string;
}
const LinkNavigationItem = ({ href, label }: LinkNavigationItemProps) => {
  return (
    <li className="block">
      <ActiveLink href={href} activeClassName="border-current" exact={false}>
        <a className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
          {label}
        </a>
      </ActiveLink>
    </li>
  );
};
