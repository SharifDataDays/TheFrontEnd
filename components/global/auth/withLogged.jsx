import React, { useState, useEffect } from 'react';
import nextCookie from 'next-cookies';
import getResponse from './utils';
import { login } from '~/utils/auth';
import { authAPI, refreshAPI } from '~/redux/api/auth';
import Loading from '~/components/global/loading';

function withLogged(WrappedComponent) {
  const Wrapper = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const { state, token } = props;
      if (state === 'login') {
        login({ token });
      } else {
        setLoading(false);
      }
    });

    if (loading) {
      return <Loading />;
    }
    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async (ctx) => {
    const pageProps =
      (await WrappedComponent.getInitialProps) && (await WrappedComponent.getInitialProps(ctx));

    const { token } = nextCookie(ctx);

    if (!token) {
      return {
        state: '',
        ...pageProps,
      };
    }

    const initialRes = await getResponse(authAPI(), {
      headers: {
        Authorization: `Bearer ${token.access}`,
      },
    });

    if (initialRes.status_code !== 200) {
      const newAccess = await getResponse(refreshAPI(), {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          refresh: token.refresh,
        }),
      });

      if (newAccess.status_code === 200) {
        return {
          state: 'login',
          token: {
            refresh: token.refresh,
            access: newAccess.access,
          },
          ...pageProps,
        };
      }
      return {
        state: '',
        ...pageProps,
      };
    }
    return {
      state: 'login',
      token,
      ...pageProps,
    };
  };

  return Wrapper;
}

export default withLogged;
