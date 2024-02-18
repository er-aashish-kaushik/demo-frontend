import React from 'react';
import { MCQ_SCREEN } from '../../configs/constants';

export const MsgComponent = ({ label, handleNextQue }) => {
    return (
        <>
            <div className='isCorrect-msg'>
                {label}
            </div>
            <div className='next-btn'>
                <button onClick={handleNextQue}>{MCQ_SCREEN.NEXT_QUE} </button>
            </div>
        </>
    );
};
