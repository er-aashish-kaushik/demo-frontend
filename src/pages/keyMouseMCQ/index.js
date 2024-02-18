import React, { useEffect, useState } from 'react'
import ProgressBar from '../../components/shared/progress-bar'
import { data } from './mockData'
import { decodeURI } from '../../utils/parse'
import { calCulatePercentage } from '../../utils/maths'
import { MCQ_SCREEN } from '../../configs/constants'
import Rating from '../../components/rating'
import './index.scss'

const McqScreen = () => {
    const [currentQueNo, setCurrentQuestionNo] = useState(0)
    const [totalQues, setTotalQuestion] = useState(0)
    const [selectedQues, setSelectedQue] = useState(null)
    const [options, setOptions] = useState(null)
    const [isCorrect, setIsCorrect] = useState(null)
    const [selectedOption, setSelectedOption] = useState(null)
    const [progressPecentage, setProgressPrecentage] = useState(0)

    useEffect(() => {
        setTotalQuestion(data.length)
        setCurrentQuestionNo(0)
    }, [])

    useEffect(() => {
        const percentage = calCulatePercentage(currentQueNo, totalQues)
        setProgressPrecentage(percentage)

        if (currentQueNo < totalQues) {
            const optionArr = createOption(data[currentQueNo])
            setSelectedQue(data[currentQueNo])
            setOptions(optionArr)
        }
    }, [currentQueNo, totalQues])

    const handleOptionSeclect = (option) => {
        const isCorrect = option === decodeURI(selectedQues.correct_answer)
        setIsCorrect(isCorrect)
        setSelectedOption(option)
    }

    const createOption = (question) => {
        const allAnswers = [...question.incorrect_answers, question.correct_answer];
        allAnswers.sort(() => Math.random() - 0.5);
        return allAnswers
    }

    const handleNextQue = () => {
        setIsCorrect(null)
        setCurrentQuestionNo(currentQueNo + 1)
    }

    const convertRating = (str) => {
        const difficultyRatings = { easy: 1, medium: 3, hard: 5 };
        const starRating = difficultyRatings[str] || 5;
        return starRating
    }

    return (
        <div className={`km-mcq-container`}>
            <ProgressBar value={progressPecentage} />
            {
                progressPecentage !== '100.00' ?
                    <div>
                        <div className="que-info">
                            <div className="que-no">
                                Question {currentQueNo + 1} of {totalQues}
                            </div>
                            <div className='mcq-category'>
                                {decodeURI(selectedQues?.category) || "Board Game"}
                            </div>
                            <div className='mcq-difficulty'>
                                <Rating noOfStar={convertRating(selectedQues?.difficulty || "easy")} />
                            </div>
                        </div>

                        <div className='mcq-question-container'>
                            <div className='mcq-question'> {decodeURI(selectedQues?.question)}</div>
                            <div className='mcq-option-container'>
                                {options?.map((option, key) =>
                                    <div
                                        key={key}
                                        className={`
                                            mcq-option-label 
                                            ${selectedOption === decodeURI(option) ? "active" : ""}
                                            ${selectedOption === decodeURI(option) && isCorrect && "correct"}
                                            `}
                                        onClick={() => handleOptionSeclect(decodeURI(option))}
                                    >
                                        {decodeURI(option)}</div>
                                )}
                            </div>
                        </div>

                        {
                            (isCorrect || isCorrect === false) && <div className='isCorrect-msg-container'>
                                {isCorrect ? <MsgComponent label="Correct" handleNextQue={handleNextQue} />
                                    : isCorrect === false ? <MsgComponent label="Wrong! Please try again later" handleNextQue={handleNextQue} />
                                        : ""
                                }
                            </div>
                        }
                    </div>
                    :
                    <ThankyouScreen />
            }


        </div>
    )
}

const MsgComponent = ({ label, handleNextQue }) => {
    return (
        <>
            <div className='isCorrect-msg'>
                {label}
            </div>
            <div className='next-btn'>
                <button onClick={handleNextQue}>{MCQ_SCREEN.NEXT_QUE} </button>
            </div>
        </>
    )
}

const ThankyouScreen = () => {
    return (
        <div className='thankyou-screen'> {MCQ_SCREEN.THAKYOU_MSG} </div>
    )
}

export default McqScreen