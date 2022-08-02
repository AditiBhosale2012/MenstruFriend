import React  from 'react';
import ChatBot from 'react-simple-chatbot';
import Navbar from '../Navbar';
import "./chat.css";

function Chatmain() {
  return (
    <div className='chat-main'>
        
        <Navbar/>
        <ChatBot
            steps={[
                {
                  id: '1',
                  message: 'What is your name?',
                  trigger: '2',
                },
                {
                  id: '2',
                  user: true,
                  trigger: '3',
                },
                {
                  id: '3',
                  message: 'Hi {previousValue}, nice to meet you!',
                  end: true,
                },
                {
                    id:'intro-user', 
                    options:[
                      {value:'y', label:'Yes', trigger:'yes-response'},
                      {value:'n', label:'No', trigger:'no-response'},
                    ] 
                   },

              ]}
        />
    </div>
  )
}

export default Chatmain