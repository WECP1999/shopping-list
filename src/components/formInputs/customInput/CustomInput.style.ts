import styled from 'styled-components';

const CustomInputContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: left;
  align-items: left;
  text-align: left;

  & > label {
    font-weight: bold;
  }

  & > .input-wrapper {
    & > input {
      max-width: 136px;
      border: none;
      outline: none;
      font-size: 1rem;
      padding: 8px 0 8px 8px;
      border-bottom: 1px solid ${(props) => props.theme.applaudoNavyBlue};
    }
  }
`;

export default CustomInputContainer;
