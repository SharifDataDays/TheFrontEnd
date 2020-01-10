import React from 'react';
import HeaderSection from './header';
import ListSection from './list';

function Tasks({ tasks }) {
  return (
    <>
      <HeaderSection />
      <ListSection tasks={tasks} />
    </>
  );
}

export default Tasks;
