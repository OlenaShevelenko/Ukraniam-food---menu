import './App.css';
import AllCtegories from './Components/Fillter/AllCategories';
import Dishes from './Components/DishesComponents/Dishes';
import Cart from './Components/Cart/Cart';
import Header from './Header/Header';

function App() {
  return ( 
  <div>

    <div className="App">
        <Header/>
    </div>

    <div className="App">
      <div className='box '>
        <div >
          <AllCtegories/>
        </div>    
        <p></p>    
        <Cart/>
      </div>
      <div className='box'>
        <Dishes/>
      </div>
    </div>

  </div>
  );
}

export default App;
