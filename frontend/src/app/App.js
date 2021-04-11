import Header from '../common/components/Header';
import MainContainer from '../common/components/MainContainer';
import BitcoinConverterInputs from '../features/BitcoinConverter/Inputs';
import BitcoinConverterResult from '../features/BitcoinConverter/Result';

const App = () => (
  <>
    <Header />
    <MainContainer>
      <BitcoinConverterInputs />
      <BitcoinConverterResult />
    </MainContainer>
  </>
);

export default App;
