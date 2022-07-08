import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Detail from './page/Detail';
import Login from './page/Login';
import Main from './page/Main';
import Mypage from './page/Mypage';
import Signup from './page/Signup';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/detail" element={<Detail />}/>
        </Route>
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;