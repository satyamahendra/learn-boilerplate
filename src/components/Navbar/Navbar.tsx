import NavbarView from './Navbar.view';

export default function Navbar() {
  const navs = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/about',
    },
  ];

  return <NavbarView navs={navs} />;
}
