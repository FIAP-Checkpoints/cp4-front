import { Route, Routes } from 'react-router-dom';

import Home from '../screens/Home'; 
import Products from '../screens/Products'
import About from '../screens/About'
import Contact from '../screens/Contact'
import Error from '../screens/Error'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default AppRoutes;