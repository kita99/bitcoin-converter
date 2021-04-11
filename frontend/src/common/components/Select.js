import styled from '@emotion/styled';

const Select = styled.select`
  font-size: 18px;
  width: 100%;
  height: 30px;
  margin: 0;
  background-color: #f2fcff;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  &:focus,
  &:hover {
    outline: 0!important;
    border-bottom: 2px solid rgba(0, 0, 0, 1);
  }
`;

export default Select;
