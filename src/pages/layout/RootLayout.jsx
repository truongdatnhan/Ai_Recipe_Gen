import { Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <>
      {/* Create navigation here
      <MainNavigation />
      */} 
      <main>
        <Outlet />
      </main>
    </>
  );
}