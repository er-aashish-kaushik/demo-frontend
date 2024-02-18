import React, { useEffect, useMemo, useState } from 'react'
import ProgressBar from '../../components/shared/progress-bar'
import { data } from './mockData'
import { decodeURI } from '../../utils/parse'
import { calCulatePercentage } from '../../utils/maths'
import './index.scss'
import { OuestionInfo } from './OuestionInfo'
import { OptionInfo } from './OptionInfo'
import { MsgComponent } from './MsgComponent'
import { ThankyouScreen } from './ThankyouScreen'


const createOption = (question) => {
    if (!question?.incorrect_answers || !question?.correct_answer) return []
    const allAnswers = [...question?.incorrect_answers, question?.correct_answer];
    allAnswers.sort(() => Math.random() - 0.5);
    return allAnswers
}

const McqScreen = () => {
    const [currentQueNo, setCurrentQuestionNo] = useState(0)
    const [totalQues, setTotalQuestion] = useState(0)
    const [selectedQues, setSelectedQue] = useState(null)
    const [isCorrect, setIsCorrect] = useState(null)
    const [selectedOption, setSelectedOption] = useState(null)

    useEffect(() => {
        setTotalQuestion(data.length)
        setCurrentQuestionNo(0)
    }, [])

    const progressPecentage = useMemo(() => calCulatePercentage(currentQueNo, totalQues), [currentQueNo, totalQues])
    const optionsArr = useMemo(() => createOption(data[currentQueNo]), [currentQueNo]);

    useEffect(() => {
        if (currentQueNo < totalQues) {
            setSelectedQue(data[currentQueNo])
        }
    }, [currentQueNo, totalQues])

    const handleOptionSelect = (option) => {
        const isCorrect = option === decodeURI(selectedQues.correct_answer)
        setIsCorrect(isCorrect)
        setSelectedOption(option)
    }

    const handleNextQue = () => {
        setIsCorrect(null)
        setCurrentQuestionNo(currentQueNo + 1)
    }

    return (
        <div className={`km-mcq-container`}>
            <ProgressBar value={progressPecentage} />
            {
                progressPecentage !== '100.00' ?
                    <div>
                        <OuestionInfo selectedQues={selectedQues} currentQueNo={currentQueNo} totalQues={totalQues} />
                        <OptionInfo
                            selectedQues={selectedQues}
                            optionsArr={optionsArr}
                            handleOptionSelect={handleOptionSelect}
                            isCorrect={isCorrect}
                            selectedOption={selectedOption}
                        />

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


export default McqScreen