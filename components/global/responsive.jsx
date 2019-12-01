import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '~/theme';

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: breakpoints.large });
  return isDesktop ? children : null;
};
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: breakpoints.medium, maxWidth: breakpoints.large });
  return isTablet ? children : null;
};

export const LargeMobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: breakpoints.small, maxWidth: breakpoints.medium });
  return isMobile ? children : null;
};

export const SmallMobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.small });
  return isMobile ? children : null;
};

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.medium });
  return isMobile ? children : null;
};

export const NotMobile = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: breakpoints.medium });
  return isNotMobile ? children : null;
};
