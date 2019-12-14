<<<<<<< HEAD
import 'semantic-ui-css/semantic.min.css'
=======
>>>>>>> 557fba39a21c3d5d8e3d17e316119211f8540520
import App from 'next/app';
import React from 'react';
import RTLLayout from '~/components/global/rtlLayout';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <RTLLayout>
        <Component {...pageProps} />
      </RTLLayout>
    );
  }
}

// export default appWithTranslation(MyApp);
export default MyApp;
