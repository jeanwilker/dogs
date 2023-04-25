import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './UserContext/UserContext';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import User from './pages/User/User';
import ProtectedRoute from './components/Header/ProtectedRoute/ProtectedRoute';
import Photo from './components/Photo/Photo';
import UserProfile from './pages/User/UserProfile/UserProfile';
import NotFound from './components/NotFound/NotFound';

import './App.css';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <UserStorage>
                    <Header />
                    <main className='app__body'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="login/*" element={<Login />} />
                            <Route
                                path="conta/*"
                                element={
                                    <ProtectedRoute>
                                        <User />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="foto/:id" element={<Photo />} />
                            <Route
                                path="perfil/:user"
                                element={<UserProfile />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </div>
    );
}

export default App;
