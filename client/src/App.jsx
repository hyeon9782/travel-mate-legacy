import './App.css';
import MainPage from './pages/MainPage'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { RecoilRoot } from 'recoil';
import Header from './components/common/Header';
import RegisterPage from './pages/RegisterPage';
import SettingPage from './pages/SettingPage';
import SearchPage from './pages/SearchPage';
import MyPostsPage from './pages/MyPostsPage';
import CourcePage from './pages/CourcePage';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/register' exact element={<RegisterPage />} />
            <Route path='/myPosts' exact element={<MyPostsPage />} />
            <Route path='/setting' exact element={<SettingPage />} />
            <Route path='/search' exact element={<SearchPage />} />
            <Route path='/cource' exact element={<CourcePage />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
