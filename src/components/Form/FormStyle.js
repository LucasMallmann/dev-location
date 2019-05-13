import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 3;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  background: white;
  padding: 1rem 2rem;
  border-radius: 5px;

  width: 380px;
  height: 200px;

  margin-left: -190px;
  margin-top: -100px;

  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  h3 {
    font-size: 22px;
    margin: 1rem 0;
  }

  input {
    width: 100%;
    padding: 12px 8px;
  }

  div {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  padding: 12px;
  border: 0;
  outline: 0;
  width: 150px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-family: inherit;
  color: white;
  font-weight: bold;
  background: #c9c9c9;
  &:hover {
    opacity: 0.8;
  }
`;

export const ConfirmButton = styled(Button)`
  background: #5fcc66;
`;
