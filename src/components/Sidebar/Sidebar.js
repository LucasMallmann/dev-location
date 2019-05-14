import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/user';

import {
  Container,
  Sidebar as StyledSidebar,
  UserContainer,
  UserInfo,
  Username,
} from './SidebarStyles';

const Sidebar = (props) => {
  const { users, deleteUser } = props;
  return (
    <Container>
      <StyledSidebar>
        {users.map(user => (
          <UserContainer key={user.id}>
            <UserInfo>
              <img
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48,
                }}
                src={user.avatar}
                alt="img"
              />

              <Username>
                <span>{user.name}</span>
                <small>{user.username}</small>
              </Username>
            </UserInfo>
            <div>
              <FontAwesomeIcon icon="times-circle" onClick={() => deleteUser(user.id)} />
              <FontAwesomeIcon icon="chevron-right" style={{ color: '#c2c2c2' }} />
            </div>
          </UserContainer>
        ))}
      </StyledSidebar>
    </Container>
  );
};

Sidebar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      coordinates: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
      }),
    }),
  ).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

const mapStateToProps = state => ({
  users: state.user.data,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
