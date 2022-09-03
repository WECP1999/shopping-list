import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white};
  padding: 8px 24px;
  border-radius: 2px;

  &:focus,
  &:active,
  &:target,
  &:visited {
    background-color: ${(props) => props.theme.redPressed};
  }

  &:hover {
    background-color: ${(props) => props.theme.redHoverFocused};
  }

  &.button-lg {
    width: 380px;
  }
`;

export default Button;
