import './App.css';
import { Route, Routes } from 'react-router-dom';
import Books from './routes/Books';
import Categories from './routes/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
