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
        if(step<questions.length){
            setStep(step + 1)
            setScore(score + 100);
        }
        
    }


    return (
        <div className='app'>{step !== questions.length ? (
            <>

                <div className='questionSection'>

                    <div className='questionCount'>

                        <span>Question {step + 1}</span>/{questions.length}
                    </div>
                    <div className='questionText'>{questions[step].title}</div>
                </div>

                <div className='answerSection'>
                    {question.variants.map((text, index) => <button key={text} onClick={() => onClickVariant(index)}>{text}</button>)}

                    <div className='questionText'>
                        You current score is {score}.
                    </div>
                </div>
            </>

        ):(
            <div className='score'>
                {name} your score is {score}, from {questions.length} questions
            </div>
        )  }</div>
    )
}


export default Quiz


/*{questions[currentQuestion].variants.map((variant) => (

    <button  key={variant} 
    
    >
        {variant}</button>
))}*/