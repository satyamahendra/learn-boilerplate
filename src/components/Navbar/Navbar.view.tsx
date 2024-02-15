import { Link } from 'react-router-dom';
import { NavType } from './Navbar.type';

type NavbarViewPropsType = {
  navs: NavType[];
};

const NavbarView = ({ navs }: NavbarViewPropsType) => (
  <header className="flex justify-center text-white bg-orange-300">
    <div className="flex items-center justify-between w-full max-w-xl p-4">
      <h1 className="text-xl">Navbar</h1>
      <ul className="flex gap-4 ">
        {navs.map((nav: NavType) => (
          <li key={nav.name}>
            <Link to={nav.url}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </header>
);

export default NavbarView;
