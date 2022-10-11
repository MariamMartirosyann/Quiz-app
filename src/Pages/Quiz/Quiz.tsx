import * as React from 'react';
import { useState } from 'react';
import { questions } from "./Constant";
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import "./style.css"


const Quiz: React.FC = () => {


    const [score, setScore] = useState<number>(0);
    const [step, setStep] = useState<number>(0);
    const question = questions[step];




    const name = useSelector((state: RootState) => state.nameInfo.name)

    //const isCorrectAnswer= variants[correct]
    //const isWrongAnswer= currentAnswer === answerText && currentAnswer !==correctAnswer;

    // const correctAnswerClass = isCorrectAnswer ? "correct": "";
    //const wrongAnswerClass = isWrongAnswer ? "incorrect": "";
    //const disabledClass = currentAnswer ? "incorrect": "";



    const onClickVariant = (index: number) => {
        if (step < questions.length) {
            setStep(step + 1)
            setScore(score + 100);
        }

    }
 const handleStartAgain =(event:any)=>{
 setStep(0)
 setScore(0)
 }

    return (
        <div className='main'>
            {step !== questions.length ? (<><div className="welcome"> {questions[step].title}</div>
            <div className='qustions'>
                {question.variants.map((text, index) => <button key={text} onClick={() => onClickVariant(index)} className="question">{text}</button>)}
            </div>
            <div className='info'>
                <div>Score: {score}</div>
                <div>Question {step + 1}/{questions.length}</div>

            </div></>):(<> <div className="welcome">Quiz is over </div>

          <div className='finalInfo'> {name} your score is {score}, from {questions.length} questions</div>
          <div className='playAgain' onClick={handleStartAgain}> Play again</div></>)  }

{/*          Questions
            <div className="welcome"> {questions[step].title}</div>
            <div className='qustions'>
                {question.variants.map((text, index) => <button key={text} onClick={() => onClickVariant(index)} className="question">{text}</button>)}
            </div>
            <div className='info'>
                <div>Score: {score}</div>
                <div>Question {step + 1}/{questions.length}</div>

            </div> */}
       {/* <div className="welcome">Quiz is over </div>

          <div className='finalInfo'> {name} your score is {score}, from {questions.length} questions</div>
          <div className='playAgain'> Play again</div> */}
        </div>
    )
}


export default Quiz


/*{questions[currentQuestion].variants.map((variant) => (

    <button  key={variant} 
    
    >
        {variant}</button>
))}*/