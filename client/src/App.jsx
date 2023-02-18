import './App.css';
import MainPage from './pages/MainPage'
import PlanPage from './pages/PlanPage'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { RecoilRoot } from 'recoil';
import SearchPage from './pages/SearchPage';
import PartyPage from './pages/PartyPage';
import WritingPage from './pages/WritingPage';
import Header from './components/common/Header';

function App() {

  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/writing' exact element={<WritingPage />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
