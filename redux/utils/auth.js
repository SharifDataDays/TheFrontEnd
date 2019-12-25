import Cookies from 'js-cookie';

export const storeAccessToken = (accessToken) => {
    Cookies.set('access', accessToken)
}

export const storeRefreshToken = (refreshToken) => {
    Cookies.set('refresh', refreshToken)
}

export const retreiveAccessToken = () => {
    Cookies.get('access')
}

export const retreiveRefreshToken = () => {
    Cookies.get('refresh')
}