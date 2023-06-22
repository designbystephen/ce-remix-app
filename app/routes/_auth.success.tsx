import React from 'react';
import { Outlet } from '@remix-run/react';

function Success() {
  return (
    <>
    <h1>Congrats</h1>
    <Outlet />
    </>
  );
}

export default Success();
