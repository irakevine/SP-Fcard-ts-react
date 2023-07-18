import React, {useState} from 'react';
import QuestionCard from './component/QuestionCard';
import { fetchQuizQuestions } from './API';
import { QuestionState, Difficulty } from './API';
 import { GlobalStyle, Wrapper } from './App.style';

 export type AnswerObject ={
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
  const checkAnswer= (e: React.MouseEvent<HTMLButtonElement>)=>{
    if(!gameOver){
      // user answer
      const answer = e.currentTarget.value;

      // check answer against correct
      const  correct = questions[number].correct_answer === answer;

      // add score if answer is correct
    if(correct) setScore(prev =>prev + 1)

    // save answer in the array for user answers
    const answerObject ={
      question: questions[number].question,
answer,
correct,
correctAnswer: questions[number].correct_answer,
    };
    setUserAnswers((prev) =>[...prev, answerObject])
    } 
  }
  const nextQuestion=()=>{
    // move on the next question if not the last question
    const nextQuestion = number + 1;
    if(nextQuestion === TOTATAL_QUESTION){
      setGameOver(true)
    }else{
      setNumber(nextQuestion)
    }

  }

  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === TOTATAL_QUESTION ? (
        < button className='start' onClick={startTrivia}>
        start
      </button>
      ):null}
      
      {!gameOver ?<p className='score'> score: {score}</p> : null}
      {loading && <p>Loading Questions ...</p>}
      {!loading && !gameOver && (
        <QuestionCard  
        questionNumber={number+1}
        totalQuestion={TOTATAL_QUESTION}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer= {userAnswers ? userAnswers[number]: undefined}
        callback={checkAnswer}
        />
        )}
      {!loading && !gameOver && userAnswers.length === number + 1 && number !== TOTATAL_QUESTION - 1?(
        
        <button className='next' onClick={nextQuestion}> Next Question</button>
        
        ): null}

    </Wrapper>
        </>
  );
}

export default App;
