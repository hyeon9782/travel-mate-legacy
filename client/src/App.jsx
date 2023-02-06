import './App.css';
import Header from './components/Header'
import MainPage from './pages/MainPage'
import PlanPage from './pages/PlanPage'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/plan' exact element={<PlanPage />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
