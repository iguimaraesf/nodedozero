import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Post from './pages/Post'
import Registration from './pages/Registration'
import Login from './pages/Login'
import { AuthContext } from './helpers/AuthContext'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [authState, setAuthState] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:3001/auth/auth', {
            headers: {
                accessToken: localStorage.getItem('accessToken')
            }
        }).then((response) => {
            if (response.data.error) {
                setAuthState(false)
            } else {
                setAuthState(true)
            }
        })
    }, [])

    return (
        <div className="App">
            <AuthContext.Provider value='({ authState, setAuthState })'>
                <BrowserRouter>
                    <div className='navbar'>
                        <Link to="/createpost">Novo post</Link>
                        <Link to="/">Home</Link>
                        {!authState && (
              <>
                <Link to="/login"> Login</Link>
                <Link to="/registration"> Registration</Link>
              </>
            )}
                    </div>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/createpost' element={<CreatePost/>}/>
                        <Route path='/post/:id' element={<Post/>}/>
                        <Route path='/registration' element={<Registration/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
