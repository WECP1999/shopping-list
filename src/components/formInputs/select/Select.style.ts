import styled from 'styled-components';

const Select = styled.select`
  width: 380px;
  color: ${(props) => props.theme.applaudoNavyblue};
  box-shadow: none;
  padding-left: 4px;
  
  &:focus {
    outline: none;
  }
`;

export default Select;
