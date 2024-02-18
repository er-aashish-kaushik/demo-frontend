import React from 'react';
import { decodeURI } from '../../utils/parse';

export const OptionInfo = ({ selectedQues, optionsArr, handleOptionSelect, selectedOption, isCorrect = { isCorrect } }) => {
    return (
        <div className='mcq-question-container'>
            <div className='mcq-question'> {decodeURI(selectedQues?.question)}</div>
            <div className='mcq-option-container'>
                {optionsArr?.map((option, key) => <div
                    key={key}
                    className={`
                    mcq-option-label 
                    ${selectedOption === decodeURI(option) ? "active" : ""}
                    ${selectedOption === decodeURI(option) && isCorrect && "correct"}
                    `}
                    onClick={() => handleOptionSelect(decodeURI(option))}
                >
                    {decodeURI(option)}</div>
                )}
            </div>
        </div>
    );
};
