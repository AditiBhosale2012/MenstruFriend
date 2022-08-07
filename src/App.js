import logo from './logo.svg';
import './App.css';
import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/index';
import Quiz from './Components/Quiz/Quiz';
import Chatmain from './Components/Chatbot/Chatmain';
import Homemain from './Components/Home/Homemain';
import Home from './Components/Home/Home';
import Faqsection from './Components/FAQ/Faqsection';
import Join from './Components/Livechat/components/Join/Join';
import { Chat } from './Components/Livechat/components/Chat/Chat';
function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/faq' element={<Faqsection/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
          <Route path='/chatbot' element={<Chatmain/>} />
          <Route path='/livechat' element={< Join/>}/>
          <Route path='/chat' element={<Chat />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
