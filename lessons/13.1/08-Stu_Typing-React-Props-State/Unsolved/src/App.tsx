// TODO: Integrate the Advertisement component into the App component below. 
// Create two instances of the component.

import './App.css'
import Calculator from './components/Calculator';
import Advertisement from './components/Advertisement';
import Advertisement2 from './components/Advertisement';

function App() {

  return (
    <>
      <Advertisement companyName={'Intel'} productDescription={'CPU: i9-12900KF'} price={'$273'}/>
      <Advertisement2 companyName={'Papa John\'s'} productDescription={'Pizza: Large, 1-Topping'} price={'$9'}/>
      <Calculator />
    </>
  )
}

export default App
