import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
import NavBar from './components/NavBar'
import { ShoppingListProvider} from './context/ShoppingListContext.tsx'

function App() {
  return (
    <ShoppingListProvider>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingListProvider>
  )
}

export default App
