import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Container,
  Sidebar as StyledSidebar,
  UserContainer,
  UserInfo,
  Username,
} from './SidebarStyles';

const Sidebar = () => (
  <Container>
    <StyledSidebar>
      <UserContainer>
        <UserInfo>
          <img
            style={{
              borderRadius: 100,
              width: 48,
              height: 48,
            }}
            src="https://avatars2.githubusercontent.com/u/23031413?v=4"
            alt="img"
          />

          <Username>
            <span>name</span>
            <small>username</small>
          </Username>
        </UserInfo>
        <div>
          <FontAwesomeIcon icon="times-circle" />
          <FontAwesomeIcon icon="chevron-right" style={{ color: '#c2c2c2' }} />
        </div>
      </UserContainer>

      <UserContainer>
        <UserInfo>
          <img
            style={{
              borderRadius: 100,
              width: 48,
              height: 48,
            }}
            src="https://avatars2.githubusercontent.com/u/23031413?v=4"
            alt="img"
          />

          <Username>
            <span>name</span>
            <small>username</small>
          </Username>
        </UserInfo>
        <div>
          <FontAwesomeIcon icon="times-circle" />
          <FontAwesomeIcon icon="chevron-right" style={{ color: '#c2c2c2' }} />
        </div>
      </UserContainer>

      <UserContainer>
        <UserInfo>
          <img
            style={{
              borderRadius: 100,
              width: 48,
              height: 48,
            }}
            src="https://avatars2.githubusercontent.com/u/23031413?v=4"
            alt="img"
          />

          <Username>
            <span>name</span>
            <small>username</small>
          </Username>
        </UserInfo>
        <div>
          <FontAwesomeIcon icon="times-circle" />
          <FontAwesomeIcon icon="chevron-right" style={{ color: '#c2c2c2' }} />
        </div>
      </UserContainer>
    </StyledSidebar>
  </Container>
);

export default Sidebar;
