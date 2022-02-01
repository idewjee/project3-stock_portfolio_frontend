import './App.css';

//Import components 
import Header from './Components/Header'
import Main from './Components/Main'
import StockOptions from './Components/stockOptions'

function App() {
  return (
    <div className="App">
      
      <StockOptions/>
      <Header/>
      <Main/>
      
    </div>
  );
}

export default App;
