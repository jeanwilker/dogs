import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './UserContext/UserContext';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';

import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <UserStorage>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login/*" element={<Login />} />
                    </Routes>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </>
    );
}

export default App;
