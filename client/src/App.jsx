import './App.css';
import Header from './components/Header'
import MainPage from './pages/MainPage'
import PlanPage from './pages/PlanPage'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { RecoilRoot } from 'recoil';
import SearchPage from './pages/SearchPage';
import PartyPage from './pages/PartyPage';

function App() {

  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/party' exact element={<PartyPage />} />
            <Route path='/plan' exact element={<PlanPage />} />
            <Route path='/search' exact element={<SearchPage />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
