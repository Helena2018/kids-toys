import { Fragment } from 'react'
import { Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <h1>The navigation bar</h1>
      </div>
      <Outlet />
      </Fragment>
  );
};

export default Navigation;