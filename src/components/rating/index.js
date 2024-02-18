import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ noOfStar = 1, maxRating = 5 }) => {
    const starPrint = () => {
        let starArr = []

        for (let i = 1; i <= maxRating; i++) {
            const filled = i <= noOfStar;
            starArr.push(
                <span key={i}>
                    {filled ? (
                        <FontAwesomeIcon icon={faStar} />
                    ) : (
                        <FontAwesomeIcon icon={faStar} color='grey' />
                    )}
                </span>
            );

        }
        return starArr
    }

    return (
        <div>
            {starPrint()}
        </div>
    )

}
export default Rating