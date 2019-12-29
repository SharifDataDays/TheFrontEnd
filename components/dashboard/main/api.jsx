
import { refreshAPI } from '~/redux/api/auth';

export async function getToken(token) {
  const newAccess = await fetch(refreshAPI(), {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      refresh: token.refresh,
    }),
  });
  const newAccessJson = await newAccess.json();
  
  token = {
    refresh: token.refresh,
    access: newAccessJson.access,
  };
  return token;
}
