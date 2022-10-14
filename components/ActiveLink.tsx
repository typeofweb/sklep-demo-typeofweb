import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Children, cloneElement, ComponentProps, ReactElement } from 'react';

type ActiveLinkProps = ComponentProps<typeof Link> & {
  activeClassName: string;
  children: ReactElement;
  exact: boolean;
};
export const ActiveLink = ({ children, exact, activeClassName, className, ...props }: ActiveLinkProps) => {
  const { asPath } = useRouter();
  const child = Children.only(children);

  const asPathToCompare = exact ? asPath : stripQueryAndFragment(asPath);
  const hrefToCompare = exact ? props.href.toString() : stripQueryAndFragment(props.href.toString());

  const classes = clsx(className, child.props.className, {
    [activeClassName]: addTrailingSlash(asPathToCompare) === addTrailingSlash(hrefToCompare),
  });

  if (!child) {
    return null;
  }

  return <Link {...props}>{cloneElement(child, { className: classes })}</Link>;
};

const stripQueryAndFragment = (path: string) => path.split('?')[0];
const addTrailingSlash = (path: string) => (path.endsWith('/') ? path : path + '/');
