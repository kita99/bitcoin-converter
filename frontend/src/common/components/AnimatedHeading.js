import styled from '@emotion/styled';

const AnimatedHeading = styled.div`
  font-size: 32px;
  padding: 12px;
  font-weight: 500;
  opacity: 1;
  -webkit-transition: opacity .15s ease-in-out;
  -moz-transition: opacity .15s ease-in-out;
  -ms-transition: opacity .15s ease-in-out;
  -o-transition: opacity .15s ease-in-out;
  transition: opacity .15s ease-in-out;

  &.lighter {
    opacity: 0.2;
  }
`;

export default AnimatedHeading;
