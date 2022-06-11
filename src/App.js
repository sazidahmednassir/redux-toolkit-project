import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBook from './features/books/AddBook';
import BooksView from './features/books/BooksView';
import EditBook from './features/books/EditBook';
import Footer from './pages/Footer';

import Home from './pages/Home';
import Notfound from './pages/Notfound';
import NavBar from './Shared/NavBar';

function App() {
  return (
    <div >
      <NavBar></NavBar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<BooksView/>} />
        <Route path="/add" element={< AddBook/>} />
        <Route path="/edit" element={<EditBook></EditBook>} />
        <Route path="*" element={<Notfound></Notfound>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
