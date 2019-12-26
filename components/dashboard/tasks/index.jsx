import React from 'react';
import HeaderSection from './header';
import ListSection from './list';
import Footer from '~/components/global/footer';

function Trials({ tasks }) {
  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 100px)' }}>
        <HeaderSection />
        <ListSection tasks={tasks} />
      </div>
      <Footer />
    </>
  );
}

export default Trials;
