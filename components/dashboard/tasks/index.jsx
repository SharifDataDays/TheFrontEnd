import React from 'react';
import HeaderSection from './header';
import ListSection from './list';

function Trials({ cid, mid, milestone , token}) {
  const { title, description, image, tasks } = milestone;
  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 100px)' }}>
        <HeaderSection title={title} description={description} image={image} idsInfo={{cid, mid}}/>
        <ListSection cid={cid} mid={mid} tasks={tasks} token={token}/>
      </div>
    </>
  );
}

export default Trials;
