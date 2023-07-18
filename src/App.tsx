import React, {useState} from 'react';
// import QuestionCard from './component/QuestionCard';

import { fetchQuizQuestions } from './API';
import { Difficulty } from './API';
 
const TOTATAL_QUESTION = 10;
const App = () => {
  const [loading,setLoading] = useState(false)
  const[questions, setQuestions ] =useState([])
  const [ number , setNumber] = useState(0)
  const [ userAnswers , setUserAnswers] = useState([])
  const [ score, setScore] = useState(0)
  const [ gameOver, setGameOver] = useState(true)
console.log(fetchQuizQuestions(TOTATAL_QUESTION, Difficulty.EASY));

  const startTrivia = async ()=>{}
  const checkAnswer= (e: React.MouseEvent<HTMLButtonElement>)=>{}
  const nextQuestion=()=>{

  }
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className='start' onClick={startTrivia}>
        start
      </button>
      <p className='score'> score:</p>
      <p>Loading Questions ...</p>
      {/* <QuestionCard  
       questionNumber={number+1}
       totalQuestion={TOTATAL_QUESTION}
       question={questions[number].question}
       answers={questions[number].answers}
       userAnswer= {userAnswers ? userAnswers[number]: undefined}
       callback={checkAnswer}
      /> */}
      <button className='next' onClick={nextQuestion}> Next Question</button>

    </div>
  );
}

export default App;
