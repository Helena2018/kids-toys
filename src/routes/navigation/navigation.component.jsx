import { Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className='navigation'>
        <h1>The navigation bar</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;