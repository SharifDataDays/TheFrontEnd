import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button, Dropdown, Menu as M, Image as Im } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBlog, faSignOutAlt, faCog, faUser } from '@fortawesome/free-solid-svg-icons';
import { logoutAction } from '~/redux/actions/auth';
import { space, layout } from 'styled-system';
import Router from 'next/router';

const Menu = styled(M)`
${space}
${layout}
  position: ${(props) => (props.transparent ? 'absolute' : 'relative')} !important;
  margin: 0 !important;
  
  border-radius: 0 !important;
  border: 0 !important;
  border-bottom: ${(props) => (props.transparent ? '0' : '1px solid #e2e2e2')} !important;
  background-color: ${(props) => (props.transparent ? 'transparent' : 'white')} !important;
  z-index: 1;
  opacity: 1;
  width: 100%;
`;

const Image = styled(Im)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

function NoAuthNavbar({ transparent }) {
  return (
    <Menu size="huge" transparent={transparent} secondary>
      <Menu.Item>
        <a href="/login">
          <Button primary>ورود</Button>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/blog">بلاگ</a>
        <FontAwesomeIcon style={{ marginLeft: '0.5rem' }} color="#1d93f7" size="lg" icon={faBlog} />
      </Menu.Item>
      <Menu.Menu position="left">
        <Menu.Header>
          <a href="/">
            <Image
              style={{ marginRight: '1rem', marginTop: '2rem' }}
              size="mini"
              src="/images/logo.png"
            />
          </a>
        </Menu.Header>
      </Menu.Menu>
    </Menu>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    logout: () => dispatch(logoutAction()),
  };
}

const AuthNavbar = connect(
  null,
  mapDispatchToProps,
)(({ logout, transparent }) => {
  return (
    <Menu size="huge" transparent={transparent} secondary pl={[1, 4, 4]}>
      <Menu.Item style={{ paddingRight: 0, zIndex: 1 }}>
        <Dropdown
          item
          //  direction={"left"}
          trigger={
            <FontAwesomeIcon
              style={{ marginRight: '0.5rem' }}
              color="#1d93f7"
              size="lg"
              icon={faUser}
            />
          }
          style={{ paddingRight: 0 }}
        >
          <Dropdown.Menu style={{ left: '0 !important', zIndex: 1 }}>
            <Dropdown.Item
              href="/dashboard/profile"
              style={{
                zIndex: 1,
              }}
            >
              <a>پروفایل</a>
              <FontAwesomeIcon
                style={{ marginLeft: '0.5rem' }}
                color="#1d93f7"
                size="lg"
                icon={faCog}
              />
            </Dropdown.Item>
            <Dropdown.Item
              style={{
                zIndex: 1,
              }}
              // href="/login"
              onClick={(e) => {
                logout();
                Router.push('/login', '/login', { shallow: false });
                //  e.preventDefault();
              }}
            >
              <a>خروج</a>
              <FontAwesomeIcon
                style={{ marginLeft: '0.5rem' }}
                color="#1d93f7"
                size="lg"
                icon={faSignOutAlt}
              />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
      <Menu.Item
        style={{
          padding: 0,
        }}
      >
        <a href="/dashboard">داشبورد</a>
        <FontAwesomeIcon style={{ marginLeft: '0.5rem' }} color="#1d93f7" size="lg" icon={faBook} />
      </Menu.Item>
      <Menu.Item>
        <a href="/blog">بلاگ</a>
        <FontAwesomeIcon style={{ marginLeft: '0.5rem' }} color="#1d93f7" size="lg" icon={faBlog} />
      </Menu.Item>
      <Menu.Menu position="left">
        {/* <Menu.Header> */}
        <a href="/">
          <Image style={{ marginRight: '1.2rem' }} size="mini" src="/images/logo.png" />
        </a>
        {/* </Menu.Header> */}
      </Menu.Menu>
    </Menu>
  );
});

function Navbar({ token, transparent }) {
  if (_.isEmpty(token)) {
    return <NoAuthNavbar transparent={transparent} />;
  }
  return <AuthNavbar transparent={transparent} />;
}

export default Navbar;
