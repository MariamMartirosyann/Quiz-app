import * as React from "react";
import { useEffect, useState } from "react";
import { questions } from "./Constant";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import "./style.css";

const Quiz: React.FC = () => {
  const name = useSelector((state: RootState) => state.nameInfo.name);

  const [score, setScore] = useState<number>(0);
  const [step, setStep] = useState<number>(0);
  const [isclicked, setClicked] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<any>(0);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>();

  const question = questions[step];
  console.log("currentAnswerIndex", currentAnswerIndex);

  const onClickVariant = (index: number) => {
    if (step < questions.length) {
      setCurrentAnswerIndex(index);

      if (index === question.correct) {
        setClicked(true)
        console.log("green")
      return setScore(score + 100);
        
      }
     
      else {
        return console.log("red")};
    }
   

   
    
  };
  const handleNext = () => {
    const nextQuestion = step + 1;
    setStep(step + 1);
    setClicked(!isclicked)
    setCurrentQuestionIndex(nextQuestion);
  
  };

  const handleStartAgain = (event: any) => {
    setStep(0);
    setScore(0);
  };

  // const variantsArray = question.variants;
  // const correctAnswerIndex = question.correct;
  // const inCorrectAnswerIndex = question.incorrect
  // const correctAnwser = variantsArray[correctAnswerIndex];
  // const inCorrectAnswer = variantsArray.filter(i => i !== correctAnwser)

  // console.log("correctAnswer",correctAnwser)
  // console.log("inCorrectAnswer",inCorrectAnswer)

  return (
    <div className="main">
      {step !== questions.length ? (
        <>
          <div className="welcome"> {questions[step].title}</div>
          <div className="questions">
            {question.variants.map((text, index) => (
              <button
                key={text}
                onClick={() => onClickVariant(index)}
                className={` ${isclicked && index ===question.correct? "correct":"question"} `}
              >
                {text}
              </button>
            ))}
            <button
            disabled={!isclicked}
              onClick={handleNext}
              className={"next"}
            >
              Next
            </button>
          </div>
          <div className="info">
            <div>Score: {score}</div>
            <div>
              Question {step + 1}/{questions.length}
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="welcome">Quiz is over </div>
          <div className="finalInfo">
            {" "}
            {name} your score is {score}, from {questions.length} questions
          </div>
          <div   className="playAgain" onClick={handleStartAgain}>
            {" "}
            Play again
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
