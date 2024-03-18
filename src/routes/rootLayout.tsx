import { Outlet } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

export default function RootLayout() {
  const { pathname } = useLocation();

  // Set background color only for dashboard pages, not for the home page
  const dashboardMainStyle = pathname !== '/' ? ' bg-dark' : '';

  return (
    <>
      <nav className="flex items-center font-bold">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl">HRNet</h1>
        </Link>
      </nav>
      <main className={`flex-1${dashboardMainStyle}`}>
        <Outlet />
      </main>
    </>
  );
}
