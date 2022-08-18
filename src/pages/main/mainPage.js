import '../../App.css';
import Info from '../../components/info/info.js';
import Sell from '../../components/sell/sell.js';
import Split from '../../components/split/split';

const MainPage = () => {
    return ( 
      <container className = "container">
        <Info />
        <Sell />
        <Split />
      </container>  
    );
  }
  
  export default MainPage;  