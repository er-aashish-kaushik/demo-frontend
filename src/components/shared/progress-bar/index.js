import ProgressBar from 'react-bootstrap/ProgressBar';
import './index.scss'

const ProgressBarComp = ({ value }) => {

    return (
        <ProgressBar now={value} label={value} />
    )
}

export default ProgressBarComp