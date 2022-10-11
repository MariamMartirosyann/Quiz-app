import * as React from 'react';
import { useEffect, useState } from 'react';
import { questions } from "./Constant";
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import "./style.css"


const Quiz: React.FC = () => {
    const name = useSelector((state: RootState) => state.nameInfo.name)


    const [score, setScore] = useState<number>(0);
    const [step, setStep] = useState<number>(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<any>(0)
    const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>()

    const question = questions[step];
    console.log("currentAnswerIndex", currentAnswerIndex)


    const onClickVariant = (index: number) => {

        const nextQuestion = step + 1
        setCurrentQuestionIndex(nextQuestion)

        if (step < questions.length) {
            setStep(step + 1)
            setScore(score + 100);
            setCurrentAnswerIndex(index)
             

        }

    }
    console.log(currentQuestionIndex, "currentQuestionIndex")

    const handleShuffle = (array: any[]) => {
        [...array].sort(() => Math.random() - 0.5);
    }

    const handleStartAgain = (event: any) => {
        setStep(0)
        setScore(0)
    }

    const variantsArray = question.variants;
    const correctAnswerIndex = question.correct;
    const inCorrectAnswerIndex = question.incorrect
    const correctAnwser = variantsArray[correctAnswerIndex];
    const inCorrectAnswer = variantsArray.filter(i => i !== correctAnwser)
 
    console.log("correctAnswer",correctAnwser)
    console.log("inCorrectAnswer",inCorrectAnswer)

    ///[correctAnwser,...inCorrectAnswer]
    // useEffect(() => {

    //    {setStep(question &&
    //     handleShuffle([
    //         correctAnwser,
    //         ...inCorrectAnswer,
    //     ]
    //     );)} 
    // }, [ question]);


    return (
        <div className='main'>
            {step !== questions.length ? (<><div className="welcome"> {questions[step].title}</div>
                <div className='qustions'>
                    {question.variants.map((text, index) =>
                        <button key={text} onClick={() => onClickVariant(index)} className={"question"}>{text}
                        </button>)}
                </div>
                <div className='info'>
                    <div>Score: {score}</div>
                    <div>Question {step + 1}/{questions.length}</div>

                </div></>) : (
                <> <div className="welcome">Quiz is over </div>

                    <div className='finalInfo'> {name} your score is {score}, from {questions.length} questions</div>
                    <div className='playAgain' onClick={handleStartAgain}> Play again</div></>)}

        </div>
    )
}


export default Quiz

