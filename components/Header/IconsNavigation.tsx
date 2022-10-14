import { ActiveLink } from '../ActiveLink';

export const IconsNavigation = () => {
  return (
    <div className="ml-8 flex items-center">
      <ul className="flex items-center divide-x divide-gray-100 border-x border-gray-100">
        <IconNavigationItem
          href="/account"
          label="Account"
          icon={
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          }
        />
        <IconNavigationItem
          href="/cart"
          label="Cart"
          icon={
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          }
        />
        <IconNavigationItem
          href="/search"
          label="Search"
          icon={
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
        />
      </ul>
    </div>
  );
};

interface IconNavigationItemProps {
  href: string;
  label: string;
  icon: JSX.Element;
}
const IconNavigationItem = ({ href, label, icon }: IconNavigationItemProps) => {
  return (
    <li>
      <ActiveLink href={href} activeClassName="border-red-700">
        <a className="block border-b-4 border-transparent p-6 hover:border-red-700">
          {icon}
          <span className="sr-only"> {label} </span>
        </a>
      </ActiveLink>
    </li>
  );
};
