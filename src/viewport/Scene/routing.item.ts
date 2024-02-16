import { createElement, lazy } from 'react';

interface Route {
  label: string;
  element: any;
  path: string;
}

export const publicRoutes: Route[] = [
  {
    label: 'Todo',
    element: createElement(lazy(async () => await import('pages/Todo/'))),
    path: '/',
  },
  {
    label: 'About',
    element: createElement(lazy(async () => await import('pages/About/'))),
    path: '/about',
  },
];
