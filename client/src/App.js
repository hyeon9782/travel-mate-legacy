import './App.css';
import NaverLogin from './components/NaverLogin';
import axios from 'axios';
import {useEffect} from 'react';

function App() {
  const fetchData = () => {
    console.log("요청 전");

    const newWindow = window.open("https://map.naver.com/v5/api/bookmark/sync", '데이터');

    newWindow.alert("안녕");

    // const el = newWindow.document.getElementsByTagName("pre");
    const el = newWindow.document.querySelector("body > pre");
    
    const value = newWindow.document.getElementsByTagName("pre").values;

    console.log("요청 후");
 
    console.log(el);
    console.log(value);
    // console.log(el.item(0));
    
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className="App">
      <h1>메인</h1>
      <h2 className='test1'></h2>
      <NaverLogin />
    </div>
  );
}

export default App;
