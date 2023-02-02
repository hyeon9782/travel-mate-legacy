import './App.css';
import NaverLogin from './components/NaverLogin';
import { useEffect, useState } from 'react';
import axios from "axios";
import Location from './components/kakao/location';

function App() {

  const [ storeList, setStoreList ] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:4000/api/store');
    console.log(res);
    console.log(res.data);
    setStoreList(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>메인</h1>
      {storeList.map((store) => {
        return <div key={store.store_id}><div>{store.store_title}</div></div>;
      })}
      <NaverLogin />
      <Location />
    </div>
  );
}

export default App;
