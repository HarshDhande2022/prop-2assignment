import './App.css';
import Img from './Images/img1.jpg';
import Img2 from './Images/img2.jpg';
import Cards from './Components/Card';

function App() {

  return (
    <div className="App">
    <Cards NewHottel="Hottel Harsh" YearOfOpening="2021, Near Maharaja Nagar, Nagpur" images={Img} />
    <Cards
      NewHottel="Hottel Taj"
      YearOfOpening="2022, Near Jaripatka, Nagpur"
      images={Img2}
    />
  </div>
  );
}

export default App;
