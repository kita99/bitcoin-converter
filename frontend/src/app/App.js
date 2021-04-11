import BitcoinConverterInputs from '../features/BitcoinConverter/Inputs';
import BitcoinConverterResult from '../features/BitcoinConverter/Result';
import MainContainer from '../common/components/MainContainer';
import TopBar from '../common/components/TopBar';

const App = () => (
  <>
    <TopBar>
      <h2>Bitcoin Converter</h2>
    </TopBar>
    <MainContainer>
      <BitcoinConverterInputs />
      <BitcoinConverterResult />
    </MainContainer>
  </>
);

export default App;
