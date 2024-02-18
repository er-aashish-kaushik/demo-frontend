import React from 'react';
import { decodeURI } from '../../utils/parse';
import Rating from '../../components/rating';
import { convertRating } from '../../utils/helper';

export const OuestionInfo = ({ currentQueNo, totalQues, selectedQues }) => (
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
);
