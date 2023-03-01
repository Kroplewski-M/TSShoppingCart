import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { Nav } from './components/Nav';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
function App() {
 

  return (
    <>
    <ShoppingCartProvider>
      <Nav></Nav>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/store' element={<Store />}></Route>
      </Routes>
    </ShoppingCartProvider>
    </>
  )
}

export default App
