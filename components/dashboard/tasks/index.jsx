import React from 'react';
import HeaderSection from './header';
import ListSection from './list';

function Trials({ tasks }) {
  return (
    <>
      <HeaderSection />
      <ListSection tasks={tasks} />
    </>
  );
}

export default Trials;
