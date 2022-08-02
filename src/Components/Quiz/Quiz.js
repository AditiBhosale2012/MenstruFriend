import React, { useState, useEffect } from 'react';
import Start from './start';
import Question from './question';
import End from './end';
import quizData from '../../data/quiz.json';
import Modal from './answers';
import Layout from './Layout';
import './quiz.css'
import Navbar from "../Navbar/index";
import Fotter from "../Footer/Fotter";
let interval;

function Quiz() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }
  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  return (
    <div className='main'>
        <Navbar />
    <div className='quiz-main'>
         {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <Question 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End
      results={answers}
      data={quizData.data}
      onReset={resetClickHandler}
      onAnswerCheck={() => setStep(4)}
      time={time}
      />}
      {/* {step === 4 && <Modal 
      results={answers}
      data={quizData.data}
      />} */}
    </div>
    <Fotter />
    </div>
  )
}

export default Quiz
