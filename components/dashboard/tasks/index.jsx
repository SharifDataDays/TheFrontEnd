import React from 'react';
import HeaderSection from './header';
import ListSection from './list';

function Trials({ cid, mid, milestone , token, clear}) {
  const { title, description, image, tasks } = milestone;
  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 100px)' }}>
        <HeaderSection title={title} description={description} image={image} />
        <ListSection clear={clear} cid={cid} mid={mid} tasks={tasks} token={token}/>
      </div>
    </>
  );
}

export default Trials;
