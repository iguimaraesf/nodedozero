import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Link to="/createpost">Novo post</Link>
            <Link to="/">Home</Link>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/createpost' element={<CreatePost/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
