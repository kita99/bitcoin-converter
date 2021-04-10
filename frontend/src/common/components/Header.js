import styled from '@emotion/styled';

const Container = styled.div`
  height: 50px;
  text-align: left;
  padding: 1% 0 2% 2%;
  margin: 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.14);
  -webkit-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.14);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.14);
`;

const Header = () => (
  <Container>
    <h2>Bitcoin Converter</h2>
  </Container>
);

export default Header;
