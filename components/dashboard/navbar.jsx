import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button, Menu as M, Image as Im } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { logoutAction } from '~/redux/actions/auth';

const Menu = styled(M)`
  position: ${(props) => (props.transparent ? 'absolute' : 'relative')} !important;
  margin: 0 !important;
  border-radius: 0 !important;
  border: 0 !important;
  border-bottom: ${(props) => (props.transparent ? '0' : '1px solid #e2e2e2')} !important;
  background-color: ${(props) => (props.transparent ? 'transparent' : 'white')} !important;
  z-index: ${(props) => (props.transparent ? 1 : 0)} !important;
  width: 100%;
`;

const Image = styled(Im)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

function Navbar({ logout, transparent }) {
  return (
    <Menu size="huge" transparent={transparent} secondary>
      <Menu.Item>
        <Button
          onClick={(e) => {
            e.preventDefault();
            logout();
          }}
          primary
        >
          خروج
        </Button>
      </Menu.Item>
      <Menu.Item>
        <a href="/dashboard/tasks">منابع</a>
        <FontAwesomeIcon style={{ marginLeft: '0.5rem' }} color="#1d93f7" size="lg" icon={faBook} />
      </Menu.Item>
      <Menu.Menu position="left">
        <Menu.Header>
          <a href="/dashboard/tasks">
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

export default connect(null, mapDispatchToProps)(Navbar);
