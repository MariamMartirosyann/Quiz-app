import * as React from "react";
import { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { IQuestion, questions } from "./Constant";
import { shuffledArray } from "./Utility";
import "./style.css";

const Quiz: React.FC = () => {
  const name = useSelector((state: RootState) => state.nameInfo.name);
  const [score, setScore] = useState<number>(0);
  const [step, setStep] = useState<number>(0);
  const [isClicked, setClicked] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<any>(0);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>();

  const shuffledQuestions: IQuestion[] = useMemo(
    () => shuffledArray(questions),
    []
  );

  const question = useMemo(() => {
    return shuffledQuestions[step];
  }, [shuffledQuestions, step]);

  const onClickVariant = (index: number) => {
    if (step < shuffledQuestions.length) {
      setCurrentAnswerIndex(index);
      setClicked(true);

      if (index === question.correct) {
        setScore(score + 100);
      }

      setTimeout(() => {
        handleNext();
      }, 1000);
    }
  };

  const handleNext = () => {
    const nextQuestion = step + 1;
    setStep(step + 1);
    setClicked(false);
    setCurrentQuestionIndex(nextQuestion);
  };

  const handleStartAgain = (event: any) => {
    setStep(0);
    setScore(0);
  };

  const getVariantClassName = useCallback(
    (index: number) => {
      if (index === question?.correct && isClicked) {
        return `correct`;
      }
      if (!isClicked || index !== currentAnswerIndex) {
        return "question";
      } else {
        return `${index === question.correct ? "correct" : "incorrect"}`;
      }
    },
    [currentAnswerIndex, isClicked, question?.correct]
  );

  return (
    <div className="main">
      {step !== shuffledQuestions.length ? (
        <>
          <div className="welcome"> {shuffledQuestions[step].title}</div>
          <div className="questions">
            {question.variants.map((text, index) => (
              <button
                key={text}
                onClick={() => onClickVariant(index)}
                className={getVariantClassName(index)}
              >
                {text}
              </button>
            ))}
          </div>
          <div className="info">
            <div>Score: {score}</div>
            <div>
              Question {step + 1}/{shuffledQuestions.length}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="welcome">Quiz is over </div>
          <div className="finalInfo">
            {name} your score is {score}, from {shuffledQuestions.length}{" "}
            questions
          </div>
          <div className="playAgain" onClick={handleStartAgain}>
            Play again
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
