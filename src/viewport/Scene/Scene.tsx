import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteLogger from './RouteLogger';

import Layout from '@/layouts/Layout';
import { publicRoutes } from './routing.item';

const Scene = () => (
  <Suspense>
    <BrowserRouter>
      <RouteLogger>
        <Routes>
          <Route path="/" element={<Layout />}>
            {publicRoutes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              ></Route>
            ))}
          </Route>
        </Routes>
      </RouteLogger>
    </BrowserRouter>
  </Suspense>
);

export default Scene;
