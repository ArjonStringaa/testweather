import './App.css';
import Weather from './Weather/Weather';
import CustomListDropDown from './Weather/weatherToggle';

function App() {
  return (
    <div className="App">
      <h1>My Weather Forecast</h1>
      <Weather/>
      <CustomListDropDown/>
    </div>
  );
}

export default App;
