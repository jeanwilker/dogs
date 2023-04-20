import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './UserContext/UserContext';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import User from './pages/User/User';
import ProtectedRoute from './components/Header/ProtectedRoute/ProtectedRoute';
import Photo from './components/Photo/Photo';

import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <UserStorage>
                    <Header />

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
                    </Routes>

                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </>
    );
}

export default App;
