import 'semantic-ui-css/semantic.min.css'
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
