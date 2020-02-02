import React from 'react';
import HeaderSection from './header';
import ListSection from './list';
import Footer from '~/components/global/footer';

function Trials({ cid, mid, milestone }) {
  const { title, description, image, tasks } = milestone;
  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 100px)' }}>
        <HeaderSection title={title} description={description} image={image} />
        <ListSection cid={cid} mid={mid} tasks={tasks} />
      </div>
      <Footer />
    </>
  );
}

export default Trials;
