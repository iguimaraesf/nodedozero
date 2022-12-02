import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Post from './pages/Post'
import Registration from './pages/Registration'
import Login from './pages/Login'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className='navbar'>
                    <Link to="/createpost">Novo post</Link>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/registration">Registrar</Link>
                </div>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/createpost' element={<CreatePost/>}/>
                    <Route path='/post/:id' element={<Post/>}/>
                    <Route path='/registration' element={<Registration/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
