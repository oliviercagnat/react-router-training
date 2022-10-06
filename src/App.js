import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import NotFound from './Pages/NotFound';
import Post from './Pages/Post';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter basename="/training" forceRefresh={true}>
      <div className="App">
        <Header />

        <button onClick={() => setLogin(!login)}>{login ? 'logout' : 'login'}</button>

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          {/* React Router V6 > Redirect instead of Navigate */}
          {/* <Route path="/profile" element={!login ? <Navigate to="/" replace /> : <Profile />} /> */}
          <Route path="/profile/*" element={<Profile login={login} />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
