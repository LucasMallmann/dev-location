import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 300px;
  padding: 25px 0;
  position: fixed;
  z-index: 1;
`;

export const Sidebar = styled.div`
  background: white;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin-left: 16px;
`;

export const UserContainer = styled.div`
  margin: 0 12px;
  border-bottom: 1px solid #ddd;
  padding: 14px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin: 5px;
    color: #f44336;
    cursor: pointer;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Username = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 42px;

  font-size: 16px;
  span {
    font-weight: bold;
  }
`;
