import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteLogger from './RouteLogger';
import Todos from '@/pages/Todo';
import About from '@/pages/About';
import Layout from '@/layouts/Layout';

const Scene = () => (
  <Suspense>
    <BrowserRouter>
      <RouteLogger>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Todos />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </RouteLogger>
    </BrowserRouter>
  </Suspense>
);

export default Scene;
