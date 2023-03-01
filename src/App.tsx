import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Store } from './pages/Store';
import { Nav } from './components/Nav';
function App() {
 

  return (
    <>
      <Nav></Nav>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/store' element={<Store />}></Route>
          <Route path='/about' element={<About />}></Route>

      </Routes>
    </>
  )
}

export default App
