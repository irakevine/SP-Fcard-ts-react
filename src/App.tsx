import React, {useState} from 'react';
// import QuestionCard from './component/QuestionCard';

import { fetchQuizQuestions } from './API';
import { QuestionState, Difficulty } from './API';
 

type AnswerObject ={
  question:string;
  answer:string;
  correct:boolean
  correctAnswer: string
}
const TOTATAL_QUESTION = 10;
const App = () => {
  const [loading,setLoading] = useState(false)
  const[questions, setQuestions ] =useState<QuestionState[]>([])
  const [ number , setNumber] = useState(0)
  const [ userAnswers , setUserAnswers] = useState<AnswerObject[]>([])
  const [ score, setScore] = useState(0)
  const [ gameOver, setGameOver] = useState(true)
console.log(questions);

  const startTrivia = async ()=>{
    setLoading (true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      TOTATAL_QUESTION,
      Difficulty.EASY
      )
      setQuestions(newQuestions)
      setScore(0);
      setUserAnswers([]);
      setNumber(0)
      setLoading(false)
  }
  const checkAnswer= (e: React.MouseEvent<HTMLButtonElement>)=>{}
  const nextQuestion=()=>{

  }
  return (
    <div className="App">
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === TOTATAL_QUESTION ? (
       < button className='start' onClick={startTrivia}>
        start
      </button>
      ):null}
      
      {!gameOver ?<p className='score'> score:</p> : null}
      {loading && <p>Loading Questions ...</p>}
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
