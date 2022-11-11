import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Account/Login';
import Register from './components/Account/Register';

// Use routes to render components Login based on the path /login
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
