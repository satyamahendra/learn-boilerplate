import { Link } from 'react-router-dom';
import { NavType } from './Navbar.type';

type NavbarViewPropsType = {
  navs: NavType[];
};

export default function NavbarView({ navs }: NavbarViewPropsType) {
  return (
    <header className="bg-orange-300 text-white flex justify-center">
      <div className="max-w-xl w-full p-4 flex justify-between items-center">
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
}
