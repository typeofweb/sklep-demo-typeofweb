import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Children, cloneElement, ComponentProps, ReactElement } from 'react';

type ActiveLinkProps = ComponentProps<typeof Link> & { activeClassName: string; children: ReactElement };
export const ActiveLink = ({ children, activeClassName, className, ...props }: ActiveLinkProps) => {
  const { asPath } = useRouter();
  const child = Children.only(children);

  const classes = clsx(className, child.props.className, {
    [activeClassName]: addTrailingSlash(asPath) === addTrailingSlash(props.href.toString()),
  });

  if (!child) {
    return null;
  }

  return <Link {...props}>{cloneElement(child, { className: classes })}</Link>;
};

const addTrailingSlash = (path: string) => (path.endsWith('/') ? path : path + '/');
