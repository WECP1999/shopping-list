import styled from 'styled-components';

const ShoppingCarContainer = styled.div`
  max-width: 776px;
  width: 100%;
  margin: auto;
  padding: 32px;
  display: flex;
  flex: 1;
  flex-flow: column;
  border: 1px solid ${(props) => props.theme.applaudoNavyblue};
  border-radius: 2px;
  margin-top: 32px;
  margin-bottom: 32px;
  & > h2 {
    margin-bottom: 24px;
    margin-left: 16px;
  }

  & > .form-container {
    display: flex;
    flex-flow: row wrap;
    gap: 16px;
  }
`;

export default ShoppingCarContainer;
